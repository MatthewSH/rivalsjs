import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { BattlepassResponse } from "types/v1";
import { routes } from "v1";
import { transformBattlepassResponse } from "v1/transformers";

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
