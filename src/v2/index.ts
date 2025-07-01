import { buildQueryString } from "utils";

export const routes = {
  player(uid: number) {
    return `/v2/player/${uid}`;
  },

  playerMatchHistory(
    uid: number,
    page?: number,
    limit?: number,
    gameMode?: number,
    timestamp?: number,
  ) {
    return buildQueryString(`/v2/player/${uid}/match-history`, {
      page,
      limit,
      game_mode: gameMode,
      timestamp,
    });
  },
};

export * from "./api";
