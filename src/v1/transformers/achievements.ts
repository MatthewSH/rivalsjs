import type { AchievementResponse, AllAchievementsResponse } from "types/v1";
import { convertToAssetUrl } from "utils";

export function transformAllAchievementsResponse(
  data: AllAchievementsResponse,
): AllAchievementsResponse {
  const transformedData = {
    ...data,
    achievements: data.achievements.map((achievement) => ({
      ...achievement,
      icon: convertToAssetUrl(achievement.icon),
    })),
  };

  return transformedData;
}

export function transformAchievementResponse(
  data: AchievementResponse,
): AchievementResponse {
  return {
    ...data,
    icon: convertToAssetUrl(data.icon),
  };
}
