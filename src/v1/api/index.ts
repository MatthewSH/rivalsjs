import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { HealthCheckResponse } from "types/v1";
import { routes } from "v1";
import { transformHealthCheckResponse } from "v1/transformers";

/**
 * API health check.
 *
 * @export
 * @async
 * @param {Client} client
 * @returns {Promise<Result<HealthCheckResponse, string>>}
 */
export async function getHealthCheck(
  client: Client,
): Promise<Result<HealthCheckResponse, string>> {
  return fromPromise(client.get(routes.healthCheck()), (error) =>
    String(error),
  ).map((response) => transformHealthCheckResponse(response.data));
}

export * from "./achievements";
export * from "./battlepass";
export * from "./heroes";
export * from "./maps";
export * from "./match";
export * from "./player";
