import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { FindPlayerResponse } from "types/v1";
import { routes } from "v1";
import { transformFindPlayerResponse } from "v1/transformers";

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
