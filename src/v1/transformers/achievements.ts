// import type {
//   AllAchievementsResponse,
//   APIAllAchievementsResponse,
// } from "@/types/v1";
// import { camelJson, convertToAssetUrl } from "@/utils";

// export function transformAllAchievementsResponse(
//   response: any,
// ): AllAchievementsResponse {
//   const res = camelJson<AllAchievementsResponse>(response);

//   const cleanedResponse = {
//     ...res,
//     achievements: res.achievements.map((achievement) => ({
//       ...achievement,
//       icon: convertToAssetUrl(achievement.icon),
//     })),
//   };

//   return cleanedResponse;
// }
