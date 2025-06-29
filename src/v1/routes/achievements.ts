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
 * @returns {{Promise<Result<AllAchievementsResponse, Error>>}}
 */
export async function getAllAchievements(
  client: Client,
  page: number = 1,
  perPage: number = 10,
): Promise<Result<AllAchievementsResponse, Error>> {
  return fromPromise(
    client.get(routes.allAchievements(page, perPage)),
    (error) => new Error(error as string),
  ).map((response) => transformAllAchievementsResponse(response.data));
}

/**
 * Allows searching for a specific achievement either by its unique ID or its name.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} name
 * @returns {Promise<Result<AchievementResponse, Error>>}
 */
export async function getAchievement(
  client: Client,
  name: string,
): Promise<Result<AchievementResponse, Error>> {
  return fromPromise(
    client.get(routes.achievement(name)),
    (error) => new Error(error as string),
  ).map((response) => transformAchievementResponse(response.data));
}
