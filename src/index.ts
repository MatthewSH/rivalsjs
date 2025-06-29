import axios from "axios";
import axiosRetry from "axios-retry";
import camelcaseKeys from "camelcase-keys";
import { BASE_API_URL } from "./constants";
import type { ClientConfig } from "./types";

export type Client = ReturnType<typeof buildAxios>;

export function createRivalsClient(config: ClientConfig): Client {
  if (!config.apiKey) {
    throw new Error("API key is required to create a client.");
  }

  const client = buildAxios(config.apiKey);

  return client;
}

function buildAxios(apiKey: string) {
  const client = axios.create({
    baseURL: BASE_API_URL,
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
      "User-Agent": `RivalsJS/${process.env.__PACKAGE_VERSION__ ?? "dev"}`,
    },
  });

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
        console.warn(`RivalsJS: Rate limit hit. Retrying after ${delay}ms...`);
        return delay;
      }

      return axiosRetry.exponentialDelay(retryCount, error);
    },
  });

  return client;
}
