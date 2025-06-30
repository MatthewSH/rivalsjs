import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type {
  FindPlayerResponse,
  GetPlayerResponse,
  UpdatePlayerResponse,
} from "types/v1";
import { routes } from "v1";
import {
  transformFindPlayerResponse,
  transformGetPlayerResponse,
  transformUpdatePlayerResponse,
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

/**
 * Triggers an update of player data identified by the uid or username. It performs the necessary updates and returns a success or failure response.
 *
 * IMPORTANT
 * The update player endpoint is a QUEUE & TIME & USER sensitive/locked endpoint at a set time of 30 minutes what this means is it can only be used every 30 minutes on 1 specific player.
 * For more information, please refer to the [API documentation](https://docs.marvelrivalsapi.com/endpoints/player-stats/update-player).
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} player
 * @returns {Promise<Result<UpdatePlayerResponse, string>>}
 */
export async function updatePlayer(
  client: Client,
  player: string,
): Promise<Result<UpdatePlayerResponse, string>> {
  return fromPromise(client.get(routes.updatePlayer(player)), (error) =>
    String(error),
  ).map((response) => transformUpdatePlayerResponse(response.data));
}
