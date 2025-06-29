import type { BattlepassResponse, HealthCheckResponse } from "types/v1";
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

export * from "./achievements";
