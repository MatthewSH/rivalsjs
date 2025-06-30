import type {
  AllHeroesResponse,
  Hero,
  HeroLeaderboardEntry,
  HeroLeaderboardResponse,
} from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformAllHeroesResponse(
  data: AllHeroesResponse,
): AllHeroesResponse {
  return data.map((hero) => transformHeroResponse(hero));
}

export function transformHeroResponse(data: Hero): Hero {
  return {
    ...data,
    imageUrl: convertToAssetUrl(data.imageUrl),

    transformations: data.transformations.map((transformation) => ({
      ...transformation,
      icon: convertToAssetUrl(transformation.icon),
    })),

    costumes: data.costumes.map((costume) => ({
      ...costume,
      icon: convertToAssetUrl(costume.icon),
    })),

    abilities: data.abilities.map((ability) => ({
      ...ability,
      icon: convertToAssetUrl(ability.icon),
    })),
  };
}

export function transformHeroLeaderboardResponse(data: {
  players: HeroLeaderboardResponse;
}): HeroLeaderboardResponse {
  return data.players.map((entry) => transformHeroLeaderboardEntry(entry));
}

export function transformHeroLeaderboardEntry(
  data: HeroLeaderboardEntry,
): HeroLeaderboardEntry {
  return {
    ...data,
    info: {
      ...data.info,
      icon: {
        ...data.info.icon,
        playerIcon: convertToAssetUrl(data.info.icon.playerIcon),
      },
    },
  };
}
