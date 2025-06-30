import type {
  APIUpdatePlayerErrorResponse,
  APIUpdatePlayerSuccessResponse,
  FindPlayerResponse,
  GetPlayerResponse,
  UpdatePlayerResponse,
} from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformFindPlayerResponse(
  data: FindPlayerResponse,
): FindPlayerResponse {
  return data;
}

export function transformUpdatePlayerResponse(
  data: APIUpdatePlayerSuccessResponse | APIUpdatePlayerErrorResponse,
): UpdatePlayerResponse {
  if ("error" in data) {
    return {
      success: false,
      message: data.message,
      status: data.status ?? 500,
    };
  }

  return {
    success: data.success,
    message: data.message,
    status: 200,
  };
}

export function transformGetPlayerResponse(
  data: GetPlayerResponse,
): GetPlayerResponse {
  const transformedData: GetPlayerResponse = {
    ...data,
    player: {
      ...data.player,
      icon: {
        ...data.player.icon,
        playerIcon: convertToAssetUrl(data.player.icon.playerIcon),
      },
      rank: {
        ...data.player.rank,
        image: convertToAssetUrl(data.player.rank.image),
      },
    },
    matchHistory: data.matchHistory.map((match) => ({
      ...match,
      mapThumbnail: convertToAssetUrl(match.mapThumbnail),
      playerPerformance: {
        ...match.playerPerformance,
        heroType: convertToAssetUrl(match.playerPerformance.heroType),
      },
    })),
    heroMatchups: data.heroMatchups.map((matchup) => ({
      ...matchup,
      heroThumbnail: convertToAssetUrl(matchup.heroThumbnail),
    })),
    teamMates: data.teamMates.map((teammate) => ({
      ...teammate,
    })),
    heroesRanked: data.heroesRanked.map((hero) => ({
      ...hero,
      heroThumbnail: convertToAssetUrl(hero.heroThumbnail),
    })),
    heroesUnranked: data.heroesUnranked.map((hero) => ({
      ...hero,
      heroThumbnail: convertToAssetUrl(hero.heroThumbnail),
    })),
    maps: data.maps.map((map) => ({
      ...map,
      mapThumbnail: convertToAssetUrl(map.mapThumbnail),
    })),
  };

  return transformedData;
}
