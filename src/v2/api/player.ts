import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { PlayerMatchHistoryResponse, PlayerResponse } from "types/v2";
import { routes } from "v2";
import {
  transformPlayerMatchHistoryResponse,
  transformPlayerResponse,
} from "v2/transformers";

/**
 * Player data for a specific player identified by uid or username. It processes player statistics and related data, such as match history, rank history, heroes, and maps.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {number} uid
 * @returns {Promise<Result<PlayerResponse, string>>}
 */
export async function getPlayer(
  client: Client,
  uid: number,
): Promise<Result<PlayerResponse, string>> {
  return fromPromise(client.get(routes.player(uid)), (error) =>
    String(error),
  ).map((response) => transformPlayerResponse(response.data));
}

/**
 * Retrieves the match history of a player based on their unique identifier (UID) or username. It allows filtering by season, skip value, and game mode.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {number} uid
 * @param {?number} [page]
 * @param {?number} [limit]
 * @param {?number} [gameMode]
 * @param {?number} [timestamp]
 * @returns {Promise<Result<PlayerMatchHistoryResponse, string>>}
 */
export async function getPlayerMatchHistory(
  client: Client,
  uid: number,
  page?: number,
  limit?: number,
  gameMode?: number,
  timestamp?: number,
): Promise<Result<PlayerMatchHistoryResponse, string>> {
  return fromPromise(
    client.get(
      routes.playerMatchHistory(uid, page, limit, gameMode, timestamp),
    ),
    (error) => String(error),
  ).map((response) => transformPlayerMatchHistoryResponse(response.data));
}
