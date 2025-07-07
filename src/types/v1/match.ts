export type MatchResponse = {
  matchDetails: {
    matchUid: string;
    gameMode: {
      gameModeId: number;
      gameModeName: string;
    };
    replayId: string;
    mvpUid: number;
    mvpHeroId: number;
    svpUid: number;
    svpHeroId: number;
    dynamicFields: {
      banPickInfo: {
        battleSide: number;
        isOneSide: boolean;
        confId: number;
        roundIdx: number;
        effectBattleSide: number;
        // biome-ignore lint/suspicious/noExplicitAny: Allowed until I know more.
        votes: any;
        heroId: number;
        isPick: number;
        voteType: number;
      }[];
    };
    matchPlayers: {
      playerUid: number;
      nickName: string;
      playerIcon: number;
      camp: number;
      curHeroId: number;
      curHeroIcon: string;
      isWin: number;
      kills: number;
      deaths: number;
      assists: number;
      totalHeroDamage: number;
      totalHeroHeal: number;
      totalDamageTaken: number;
      badges?: {
        name: string;
        id: number;
        count: number;
        image: string | null;
      }[];
      playerHeroes: {
        heroId: number;
        playTime: number;
        kills: number;
        deaths: number;
        assists: number;
        sessionHitRate: number;
        heroIcon: string;
      }[];
    }[];
  };
};
