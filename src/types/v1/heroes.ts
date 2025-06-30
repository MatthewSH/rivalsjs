export type Hero = {
  id: string;
  name: string;
  realName: string;
  imageUrl: string;
  role: string;
  attackType: string;
  team: string[];
  difficulty: string;
  bio: string;
  transformations: {
    id: string;
    name: string;
    icon: string;
    health: string | null;
    movementSpeed: string | null;
  }[];
  costumes: {
    id: string;
    name: string;
    icon: string;
    quality: string;
    description: string;
    appearance: string;
  }[];
  abilities: {
    id: number;
    icon: string;
    name: string;
    isCollab: boolean;
    description: string;
    // TODO: This should be more precise, but look at hulk for example some attributes are special effect, others have projectile key, etc.
    // Need to deep dive across all heroes to find all the possible attributes
    additionalFields: {
      [key: string]: string | number | boolean | null;
    };
    transformationId: string;
  }[];
};

export type AllHeroesResponse = Hero[];

export type HeroLeaderboardEntry = {
  info: {
    name: string;
    icon: {
      playerIconId: string;
      playerIcon: string;
    };
    rankSeason: {
      rankGameId: number;
      level: number;
      rankScore: string;
      maxLevel: number;
      maxRankScore: string;
      updateTime: number;
      winCount: number;
      protectScore: number;
      diffScore: string;
    };
    loginOs: string;
  };
  playerUid: number;
  matches: number;
  wins: number;
  kills: number;
  deaths: number;
  assists: number;
  playTime: string;
  totalHeroDamage: string;
  totalDamageTaken: string;
  totalHeroHeal: string;
  mvps: number;
  svps: number;
};

export type HeroLeaderboardResponse = HeroLeaderboardEntry[];
