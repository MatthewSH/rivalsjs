// import type {
//   APIBattlepassResponse,
//   APIHealthCheckResponse,
//   BattlepassResponse,
//   HealthCheckResponse,
// } from "@/types/v1";
// import { camelJson, convertToAssetUrl } from "@/utils";

import type { HealthCheckResponse } from "types/v1";

export function transformHealthCheckResponse(
  response: HealthCheckResponse,
): HealthCheckResponse {
  return response;
}

// export function transformBattlepassResponse(
//   response: APIBattlepassResponse,
// ): BattlepassResponse {
//   const res = camelJson<BattlepassResponse>(response);

//   const cleanedResponse = {
//     ...res,
//   };

//   if (cleanedResponse.items.length > 0) {
//     cleanedResponse.items = cleanedResponse.items.map((item) => ({
//       ...item,
//       image: convertToAssetUrl(item.image),
//     }));
//   }

//   return cleanedResponse;
// }

// export * from "./achievements";
