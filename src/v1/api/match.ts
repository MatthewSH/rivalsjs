import type { Client } from "index";
import { fromPromise } from "neverthrow";
import { transformMatchResponse } from "v1/transformers";
import { routes } from "../routes";

/**
 * Retrieve match data for a specific match identified by the matchId. It processes the match details and player stats.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} matchId
 * @returns {unknown}
 */
export async function getMatch(client: Client, matchId: string) {
  return fromPromise(client.get(routes.singleMatch(matchId)), (error) =>
    String(error),
  ).map((response) => transformMatchResponse(response.data));
}
