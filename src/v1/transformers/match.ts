import type { MatchResponse } from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformMatchResponse(
  data: MatchResponse,
): MatchResponse["matchDetails"] {
  const transformedData: MatchResponse["matchDetails"] = {
    ...data.matchDetails,

    matchPlayers: data.matchDetails.matchPlayers.map((player) => ({
      ...player,
      curHeroIcon: convertToAssetUrl(player.curHeroIcon),
      playerHeroes: player.playerHeroes.map((hero) => ({
        ...hero,
        heroIcon: convertToAssetUrl(hero.heroIcon),
      })),
      badges: player.badges
        ? player.badges.map((badge) => ({
            ...badge,
            image: badge.image ? convertToAssetUrl(badge.image) : null,
          }))
        : null,
    })),
  };

  return transformedData;
}
