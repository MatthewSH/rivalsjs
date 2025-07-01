import type { BasePagination } from ".";

export type PlayerResponse = {
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
    level: string;
    name: string;
    icon: {
      playerIconId: string;
      playerIcon: string;
      banner: string;
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
    rank: {
      rank: string;
      score: string;
      unit: string;
      icon: string;
      color: string;
      peakRank: {
        rank: string;
        score: string;
        unit: string;
        icon: string;
        color: string;
      };
    };
  };
  isPrivate: boolean;
  overallStats: {
    totalMatches: number;
    totalWins: {
      wins: number;
      percentileRaw: number;
      percentile: string;
      winPercentage: {
        percentileRaw: number;
        percentile: number;
        placement: string;
      };
    };
    totalPlayTime: {
      timePlayed: number;
      playtime: string;
    };
    perMinute: {
      totalDamagePerMinute: number;
      totalDamageTakenPerMinute: number;
      totalHealingPerMinute: number;
    };
    overallKd: number;
    overallKda: {
      kda: number;
      percentileRaw: number;
      percentile: string;
    };
    totalMvps: {
      mvps: number;
      mvpPercentage: {
        percentileRaw: number;
        percentile: number;
        placement: string;
      };
    };
    totalSvps: {
      svps: number;
      svpPercentage: {
        percentileRaw: number;
        percentile: number;
        placement: string;
      };
    };
    totalKills: {
      kills: number;
      percentileRaw: number;
      percentile: string;
    };
    totalDeaths: {
      deaths: number;
    };
    totalAssists: {
      assists: number;
    };
    totalDamage: {
      damage: string;
      raw: number;
    };
    totalHealing: {
      healing: string;
      raw: number;
    };
    totalDamageTaken: {
      damageTaken: string;
      raw: number;
    };
    maxKillStreak: {
      damageTaken: number;
    };
    rolesPlayed: {
      // TODO: Define this because it may only ever be strategist, vanguard, or duelist
      [key: string]: {
        totalTimePlayed: {
          timePlayed: number;
          playtime: string;
        };
        matchesPlayed: number;
        matchesWon: string;
        winPercentage: {
          winRate: string;
          winRateRaw: number;
        };
        kills: number;
        deaths: number;
        assists: number;
        kdRatio: {
          kd: string;
          kdRaw: number;
        };
        kdaRatio: {
          kda: string;
          kdaRaw: number;
        };
        totalDamage: {
          damage: string | null;
          raw: number | null;
        };
        totalDamageTaken: {
          damageTaken: string | null;
          raw: number | null;
        };
        totalDamageTakenPerMinute: string;
        totalHealing: {
          healing: string | null;
          raw: number | null;
        };
        totalHealingPerMinute: {
          healing: string;
          raw: number;
        };
      };
    };
    ranked: {
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
    unranked: {
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
  };
  matchHistory: {
    matchUid: string;
    mapId: number;
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
      "0": number;
      "1": number;
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
    heroId?: number;
    heroName: string;
    heroClass: string;
    heroThumbnail?: string;
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
  heroesRanked: {
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
  }[];
  heroesUnranked: {
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
  }[];
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

export type PlayerMatchHistoryResponse = {
  matchHistory: {
    matchMapId: number;
    mapThumbnail: string;
    matchPlayDuration: string;
    matchSeason: string;
    matchUid: string;
    matchWinnerSide: number;
    mvpUid: number;
    svpUid: number;
    scoreInfo: {
      [key: string]: number;
    };
    matchTimeStamp: number;
    playModeId: number;
    gameModeId: number;
    matchPlayer: {
      assists: number;
      kills: number;
      deaths: number;
      isWin: {
        score: number;
        isWin: boolean;
      };
      disconnected: boolean;
      playerUid: number;
      camp: number;
      scoreInfo: {
        addScore: number;
        level: number;
        newLevel: number;
        newScore: number;
      };
      playerHero: {
        heroId: number;
        heroName: string;
        heroType: string;
        kills: number;
        deaths: number;
        assists: number;
        playTime: {
          raw: number;
          formatted: string;
        };
        totalHeroDamage: number;
        totalDamageTaken: number;
        totalHeroHeal: number;
      };
    };
  }[];
  pagination: BasePagination & {
    totalMatches: number;
  };
};
