import { err, fromPromise, ok, type Result } from "neverthrow";
import type { Client } from "@/index";
import type { HealthCheckResponse } from "@/types/v1";
import { routes } from "@/v1";
import { transformHealthCheckResponse } from "../transformers";

export async function healthCheck(client: Client) {
  const request = client.get(routes.healthCheck());
}
