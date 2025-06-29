import type {
  AllMapsResponse,
  BattlepassResponse,
  HealthCheckResponse,
} from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformHealthCheckResponse(
  response: HealthCheckResponse,
): HealthCheckResponse {
  return response;
}

export function transformBattlepassResponse(
  response: BattlepassResponse,
): BattlepassResponse {
  const cleanedResponse = {
    ...response,
  };

  if (cleanedResponse.items.length > 0) {
    cleanedResponse.items = cleanedResponse.items.map((item) => ({
      ...item,
      image: convertToAssetUrl(item.image),
    }));
  }

  return cleanedResponse;
}

export function transformAllMapsResponse(response: AllMapsResponse) {
  const cleanedResponse = {
    ...response,
    maps: response.maps.map((map) => ({
      ...map,
      images: map.images.map((image) => convertToAssetUrl(image)),
      subMap: map.subMap
        ? {
            ...map.subMap,
            thumbnail: map.subMap.thumbnail
              ? convertToAssetUrl(map.subMap.thumbnail)
              : null,
          }
        : null,
    })),
  };

  return cleanedResponse;
}

export * from "./achievements";
