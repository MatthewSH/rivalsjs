export type FindPlayerResponse = {
  name: string;
  uid: string;
};

export type APIUpdatePlayerSuccessResponse = {
  success: boolean;
  message: string;
};

export type APIUpdatePlayerErrorResponse = {
  error: boolean;
  message: string;
  status: number;
};

export type UpdatePlayerResponse = {
  success: boolean;
  message: string;
  status: number;
};

type OverallStatsEntry = {
  totalMatches: number;
  totalWins: number;
  totalAssists: number;
  totalDeaths: number;
  totalKills: number;
  totalTimePlayed: string;
  totalTimePlayedRaw: number;
  totalMvp: number;
  totalSvp: number;
};

type PlayerHeroStatEntry = {
  heroId: number;
  heroName: string;
  heroThumbnail: string;
  matches: number;
  wins: number;
  mvp: number;
  svp: number;
  kills: number;
  deaths: number;
  assists: number;
  playTime: number;
  damage: number;
  heal: number;
  damageTaken: number;
  mainAttack: {
    total: number;
    hits: number;
  };
};

export type GetPlayerResponse = {
  uid: number;
  name: string;
  updates: {
    infoUpdateTime: string;
    lastHistoryUpdate: string;
    lastInsertedMatch: string;
    lastUpdateRequest: string;
  };
  player: {
    uid: number;
    level: string; // TODO: Make this a number?
    name: string;
    icon: {
      playerIconId: string;
      playerIcon: string;
    };
    rank: {
      rank: string;
      image: string;
      color: string;
    };
    team: {
      clubTeamId: string;
      clubTeamMiniName: string;
      clubTeamType: string;
    };
    info: {
      completedAchievements: string;
      loginOs: string;
      rankGameSeason: {
        [key: string]: {
          rankGameId: number;
          level: number;
          rankScore: number;
          maxLevel: number;
          maxRankScore: number;
          updateTime: number;
          winCount: number;
          protectScore: number;
          diffScore: number;
        };
      };
    };
  };
  isPrivate: boolean;
  overallStats: {
    totalMatches: number;
    totalWins: number;
    unranked: OverallStatsEntry;
    ranked: OverallStatsEntry;
  };
  matchHistory: {
    matchUid: string;
    matchId: number;
    mapThumbnail: string;
    duration: number;
    season: number;
    winnerSide: number;
    mvpUid: number;
    svpUid: number;
    matchTimeStamp: number;
    playModeId: number;
    gameModeId: number;
    scoreInfo: {
      [key: string]: number;
    };
    playerPerformance: {
      playerUid: number;
      heroId: number;
      heroName: string;
      heroType: string;
      kills: number;
      deaths: number;
      assists: number;
      isWin: {
        score: number;
        isWin: boolean;
      };
      disconnected: boolean;
      camp: number;
      scoreChange: number;
      level: number;
      newLevel: number;
      newScore: number;
    };
  }[];
  rankHistory: {
    matchTimeStamp: number;
    levelProgression: {
      from: number;
      to: number;
    };
    scoreProgression: {
      addScore: number;
      totalScore: number;
    };
  }[];
  heroMatchups: {
    heroId: number;
    heroName: string;
    heroClass: string;
    heroThumbnail: string;
    matches: number;
    wins: number;
    winRate: string;
  }[];
  teamMates: {
    playerInfo: {
      nickName: string;
      playerIcon: string;
      playerUid: number;
    };
    matches: number;
    wins: number;
    winRate: string;
  }[];
  heroesRanked: PlayerHeroStatEntry[];
  heroesUnranked: PlayerHeroStatEntry[];
  maps: {
    mapId: number;
    mapThumbnail: string;
    matches: number;
    wins: number;
    kills: number;
    deaths: number;
    assists: number;
    playTime: number;
  }[];
};
