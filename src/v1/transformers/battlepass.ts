import type { BattlepassResponse } from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformBattlepassResponse(
  data: BattlepassResponse,
): BattlepassResponse {
  const transformedData = {
    ...data,
  };

  if (transformedData.items.length > 0) {
    transformedData.items = transformedData.items.map((item) => ({
      ...item,
      image: convertToAssetUrl(item.image),
    }));
  }

  return transformedData;
}
