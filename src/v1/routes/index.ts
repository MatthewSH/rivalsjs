import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type {
  AllMapsResponse,
  BattlepassResponse,
  HealthCheckResponse,
} from "types/v1";
import { routes } from "v1";
import {
  transformAllMapsResponse,
  transformBattlepassResponse,
  transformHealthCheckResponse,
} from "v1/transformers";

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

/**
 * Retrieves the battlepass data for a given season, including season details
 * and the list of items available for the selected season.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {?number} [season] Defaults to the current season if not provided.
 * @returns {Promise<Result<BattlepassResponse, string>>}
 */
export async function getBattlepass(
  client: Client,
  season?: number,
): Promise<Result<BattlepassResponse, string>> {
  return fromPromise(client.get(routes.battlepass(season)), (error) =>
    String(error),
  ).map((response) => transformBattlepassResponse(response.data));
}

/**
 * Retrieves all available maps with optional pagination to control the number of results per page.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {number} [page=1]
 * @param {number} [perPage=10]
 * @returns {Promise<Result<AllMapsResponse, string>>}
 */
export async function getAllMaps(
  client: Client,
  page: number = 1,
  perPage: number = 10,
): Promise<Result<AllMapsResponse, string>> {
  return fromPromise(client.get(routes.allMaps(page, perPage)), (error) =>
    String(error),
  ).map((response) => transformAllMapsResponse(response.data));
}

export * from "./achievements";
export * from "./player";
