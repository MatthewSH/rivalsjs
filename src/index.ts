import axios from "axios";
import axiosRetry from "axios-retry";
import camelcaseKeys from "camelcase-keys";
import { BASE_API_URL } from "./constants";
import { logger } from "./logger";
import type { ClientConfig } from "./types";

export type Client = ReturnType<typeof buildAxios>;

export function createRivalsClient(config: ClientConfig): Client {
  if (!config.apiKey) {
    throw new Error("API key is required to create a client.");
  }

  if (
    config.retryOnRateLimit === undefined ||
    config.retryOnRateLimit === null
  ) {
    logger.warn(
      "`retryOnRateLimit` is not set. Defaulting to `false`. Will throw an error on rate limit exceeded.",
    );
    config.retryOnRateLimit = false;
  }

  const client = buildAxios(config);

  return client;
}

function buildAxios(config: ClientConfig) {
  const version = process.env.__PACKAGE_VERSION__ ?? "dev";

  logger.debug("Using RivalsJS version %s", version);

  const client = axios.create({
    baseURL: BASE_API_URL,
    headers: {
      "X-API-Key": config.apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": `RivalsJS/${version}`,
    },
  });

  client.interceptors.request.use(
    (config) => {
      logger.debug(
        "Requesting %s %s",
        config.method?.toUpperCase(),
        config.url,
      );
      return config;
    },
    (error) => {
      logger.error("Request error:", error);
      return Promise.reject(error);
    },
  );

  // Dev shit
  client.interceptors.response.use(
    (response) => {
      logger.debug(
        "Received %d response from %s %s",
        response.status,
        response.config.method?.toUpperCase(),
        response.config.url,
      );

      logger.debug(
        "Rate limit remaining: %s",
        response.headers["x-ratelimit-remaining"],
      );

      if (Number.isNaN(Number(response.headers["x-ratelimit-remaining"]))) {
        logger.error(
          "Invalid rate limit header: %s",
          response.headers["x-ratelimit-remaining"],
        );

        return Promise.reject("Invalid rate limit header");
      }

      return response;
    },
    (error) => {
      if (error.response) {
        logger.error(
          "Response error: %s %d - %s",
          error.response.config.url,
          error.response.status,
          error.response.statusText,
        );
        logger.debug("Response data:", error.response.data);
      } else {
        logger.error("Network or request error:", error.message);
      }
      return Promise.reject(error);
    },
  );

  // Camelcase transformer
  client.interceptors.response.use(
    (response) => {
      const cleanedData = camelcaseKeys(response.data, { deep: true });

      return {
        ...response,
        data: cleanedData,
      };
    },
    (error) => Promise.reject(error),
  );

  // Retry section
  if (config.retryOnRateLimit) {
    axiosRetry(client, {
      retries: 2,
      retryCondition: (error) => {
        return (
          axiosRetry.isNetworkOrIdempotentRequestError(error) ||
          error.response?.status === 429
        );
      },
      retryDelay: (retryCount, error) => {
        const resetHeader = error.response?.headers["x-ratelimit-reset"];

        if (error.response?.status === 429 && resetHeader) {
          const resetTimestamp = parseInt(resetHeader, 10) * 1000;
          const delay = Math.max(0, resetTimestamp - Date.now());
          logger.debug("Rate limit exceeded, retrying after %d ms", delay);
          return delay;
        }

        return axiosRetry.exponentialDelay(retryCount, error);
      },
    });
  }

  return client;
}
