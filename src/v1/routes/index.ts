import { fromPromise, type Result } from "neverthrow";
import type { HealthCheckResponse } from "types/v1";
import { routes } from "v1";
import { transformHealthCheckResponse } from "v1/transformers";
import type { Client } from "../../";

/**
 * API health check.
 *
 * @export
 * @async
 * @param {Client} client
 * @returns {Promise<Result<HealthCheckResponse, Error>>}
 */
export async function getHealthCheck(
  client: Client,
): Promise<Result<HealthCheckResponse, Error>> {
  return fromPromise(
    client.get(routes.healthCheck()),
    (error) => new Error(error as string),
  ).map((response) => transformHealthCheckResponse(response.data));
}

/**
 * Retrieves the battlepass data for a given season, including season details
 * and the list of items available for the selected season.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {?number} [season] Defaults to the current season if not provided.
 * @returns {Promise<Result<BattlepassResponse, Error>>}
 */
// export async function getBattlepass(
//   client: Client,
//   season?: number,
// ): Promise<Result<BattlepassResponse, Error>> {
//   return fromPromise(
//     client.get(routes.battlepass(season)).json<APIBattlepassResponse>(),
//     (error) => new Error(error as string),
//   ).andThen((response) => ok(transformBattlepassResponse(response)));
// }

// export * from "./achievements";
// export * from "./player";
