import camelcaseKeys from "camelcase-keys";
import wretch from "wretch";
import addonQS from "wretch/addons/querystring";
import { BASE_API_URL } from "@/constants";
import type { ClientConfig } from "@/types";

export type Client = ReturnType<typeof buildWretchClient>;

export function createRivalsClient(config: ClientConfig): Client {
  if (!config.apiKey) {
    throw new Error("API key is required to create a client.");
  }

  const client = buildWretchClient(config.apiKey);

  return client;
}

function buildWretchClient(apiKey: string) {
  return wretch(BASE_API_URL)
    .headers({
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    })
    .addon(addonQS);
  // .resolve((_) => _.json((data) => camelcaseKeys(data, { deep: true })));
}
