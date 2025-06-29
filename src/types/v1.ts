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

export type AllMapsResponse = {
  totalMaps: number;
  maps: {
    id: number;
    name: string;
    fullName: string;
    location: string;
    description: string;
    gameMode: string;
    isCompetitive: boolean;
    subMap: {
      id: number | null;
      name: string | null;
      thumbnail: string | null;
    };
    video: string | null;
    images: string[];
  }[];
};
