import type {
  APIBattlepassResponse,
  APIHealthCheckResponse,
  BattlepassResponse,
  HealthCheckResponse,
} from "@/types/v1";
import { camelJson, convertToAssetUrl } from "@/utils";

export function transformHealthCheckResponse(
  response: APIHealthCheckResponse,
): HealthCheckResponse {
  return camelJson<HealthCheckResponse>(response);
}

export function transformBattlepassResponse(
  response: APIBattlepassResponse,
): BattlepassResponse {
  const res = camelJson<BattlepassResponse>(response);

  const cleanedResponse = {
    ...res,
  };

  if (cleanedResponse.items.length > 0) {
    cleanedResponse.items = cleanedResponse.items.map((item) => ({
      ...item,
      image: convertToAssetUrl(item.image),
    }));
  }

  return cleanedResponse;
}
