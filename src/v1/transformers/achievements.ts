import type { AllAchievementsResponse } from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformAllAchievementsResponse(
  response: AllAchievementsResponse,
): AllAchievementsResponse {
  const cleanedResponse = {
    ...response,
    achievements: response.achievements.map((achievement) => ({
      ...achievement,
      icon: convertToAssetUrl(achievement.icon),
    })),
  };

  return cleanedResponse;
}
