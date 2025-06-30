import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { FindPlayerResponse, GetPlayerResponse } from "types/v1";
import { routes } from "v1";
import {
  transformFindPlayerResponse,
  transformGetPlayerResponse,
} from "v1/transformers";

/**
 * Retrieves player uid for a specific player identified by their username. It returns basic player information such as name and unique identifier (UID).
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} username
 * @returns {Promise<Result<FindPlayerResponse, string>>}
 */
export async function findPlayer(
  client: Client,
  username: string,
): Promise<Result<FindPlayerResponse, string>> {
  return fromPromise(client.get(routes.findPlayer(username)), (error) =>
    String(error),
  ).map((response) => transformFindPlayerResponse(response.data));
}

/**
 * Player data for a specific player identified by uid or username. It processes player statistics and related data, such as match history, rank history, heroes, and maps.
 *
 * IMPORTANT: Searching player stats by username is a new feature and is not always reliable. Searching player stats by player uid is more stable.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} player This can be either a player uid or username.
 * @param {?number} [season]
 * @returns {Promise<Result<GetPlayerResponse, string>>}
 */
export async function getPlayer(
  client: Client,
  player: string,
  season?: number,
): Promise<Result<GetPlayerResponse, string>> {
  return fromPromise(client.get(routes.getPlayer(player, season)), (error) =>
    String(error),
  ).map((response) => transformGetPlayerResponse(response.data));
}
