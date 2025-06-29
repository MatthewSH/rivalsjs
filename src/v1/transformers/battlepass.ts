import type { BattlepassResponse } from "types/v1";
import { convertToAssetUrl } from "utils";

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
