import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { AchievementResponse, AllAchievementsResponse } from "types/v1";
import { routes } from "v1";
import {
  transformAchievementResponse,
  transformAllAchievementsResponse,
} from "v1/transformers";

/**
 * Retrieves a list of achievements. You can apply pagination.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {number} [page=1]
 * @param {number} [perPage=10]
 * @returns {{Promise<Result<AllAchievementsResponse, string>>}}
 */
export async function getAllAchievements(
  client: Client,
  page: number = 1,
  perPage: number = 10,
): Promise<Result<AllAchievementsResponse, string>> {
  return fromPromise(
    client.get(routes.allAchievements(page, perPage)),
    (error) => String(error),
  ).map((response) => transformAllAchievementsResponse(response.data));
}

/**
 * Allows searching for a specific achievement either by its unique ID or its name.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} name
 * @returns {Promise<Result<AchievementResponse, string>>}
 */
export async function getAchievement(
  client: Client,
  name: string,
): Promise<Result<AchievementResponse, string>> {
  return fromPromise(client.get(routes.achievement(name)), (error) =>
    String(error),
  ).map((response) => transformAchievementResponse(response.data));
}
