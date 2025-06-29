import wretch from "wretch";
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
  return wretch(BASE_API_URL).headers({
    "X-API-Key": apiKey,
    "Content-Type": "application/json",
  });
}
