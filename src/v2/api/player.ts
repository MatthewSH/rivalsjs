import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { PlayerMatchHistoryResponse, PlayerResponse } from "types/v2";
import { routes } from "v2";
import {
  transformPlayerMatchHistoryResponse,
  transformPlayerResponse,
} from "v2/transformers";

export async function getPlayer(
  client: Client,
  uid: number,
): Promise<Result<PlayerResponse, string>> {
  return fromPromise(client.get(routes.player(uid)), (error) =>
    String(error),
  ).map((response) => transformPlayerResponse(response.data));
}

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
