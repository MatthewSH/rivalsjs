export type HealthCheckResponse = {
  error: boolean;
  message: string;
  status: number;
  serverTime: string;
  serverResponseTime: string;
};

export type BattlepassResponse = {
  season: number;
  seasonName: string;
  items: {
    name: string;
    image: string;
    cost: string;
    isLuxury: boolean;
  }[];
};

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
