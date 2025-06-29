type AchievementItem = {
  name: string;
  mission: string;
  points: string;
  icon: string;
  rarity: string;
  category: string;
};

export type AllAchievementsResponse = {
  totalAchievements: number;
  achievements: AchievementItem[];
};

export type AchievementResponse = AchievementItem;
