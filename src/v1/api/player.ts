import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type {
  FindPlayerResponse,
  GetPlayerResponse,
  PlayerMatchHistoryEntry,
  UpdatePlayerResponse,
} from "types/v1";
import { routes } from "v1";
import {
  transformFindPlayerResponse,
  transformGetPlayerResponse,
  transformPlayerMatchHistoryResponse,
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
export async function searchPlayer(
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

/**
 * Retrieves the match history of a player based on their unique identifier (UID) or username. It allows filtering by season, skip value, and game mode.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} uid Player unique identifier (UID) or username.
 * @param {?number} [season] The season to retrieve match history for. Defaults to current season
 * @param {?number} [skip] The number of matches to skip (pagination). Defaults to 20.
 * @param {?number} [gameMode] The game mode to filter matches by. Defaults to 0.
 * @param {?number} [timestamp] Filter matches by timestamp. Only includes matches after the given timestamp.
 * @returns {Promise<Result<PlayerMatchHistoryEntry[], string>>}
 */
export async function getPlayerMatchHistory(
  client: Client,
  uid: string,
  season?: number,
  skip?: number,
  gameMode?: number,
  timestamp?: number,
): Promise<Result<PlayerMatchHistoryEntry[], string>> {
  return fromPromise(
    client.get(
      routes.getPlayerMatchHistory(uid, season, skip, gameMode, timestamp),
    ),
    (error) => String(error),
  ).map((response) => transformPlayerMatchHistoryResponse(response.data));
}
