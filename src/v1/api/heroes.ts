import type { Client } from "index";
import { fromPromise, type Result } from "neverthrow";
import type { Hero, HeroLeaderboardResponse } from "types/v1";
import { routes } from "v1";
import {
  transformAllHeroesResponse,
  transformHeroLeaderboardResponse,
  transformHeroResponse,
} from "v1/transformers";

/**
 * Retrieves a list of all available heroes with their details.
 *
 * @export
 * @async
 * @param {Client} client
 * @returns {Promise<Result<Hero[], string>>}
 */
export async function getAllHeroes(
  client: Client,
): Promise<Result<Hero[], string>> {
  return fromPromise(client.get(routes.allHeroes()), (error) =>
    String(error),
  ).map((response) => transformAllHeroesResponse(response.data));
}

/**
 * Detailed information about a hero. You can either provide the hero's name or ID to retrieve their stats, abilities, and other relevant details.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} name
 * @returns {Promise<Result<Hero, string>>}
 */
export async function getHero(
  client: Client,
  name: string,
): Promise<Result<Hero, string>> {
  return fromPromise(client.get(routes.hero(name)), (error) =>
    String(error),
  ).map((response) => transformHeroResponse(response.data));
}

/**
 * Retrieves the leaderboard for a specific hero based on their name or ID.
 * The leaderboard data is fetched from an external API and processed for easy consumption.
 *
 * @export
 * @async
 * @param {Client} client
 * @param {string} name
 * @returns {Promise<Result<HeroLeaderboardResponse, string>>}
 */
export async function getHeroLeaderboard(
  client: Client,
  name: string,
): Promise<Result<HeroLeaderboardResponse, string>> {
  return fromPromise(client.get(routes.heroLeaderboard(name)), (error) =>
    String(error),
  ).map((response) => transformHeroLeaderboardResponse(response.data));
}
