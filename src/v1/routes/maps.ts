import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { AllMapsResponse } from "types/v1";
import { routes } from "v1";
import { transformAllMapsResponse } from "v1/transformers";

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
