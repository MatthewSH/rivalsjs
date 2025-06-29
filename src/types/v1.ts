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

export type AllAchievementsResponse = {
  totalAchievements: number;
  achievements: {
    name: string;
    mission: string;
    points: string;
    icon: string;
    rarity: string;
    category: string;
  }[];
};
