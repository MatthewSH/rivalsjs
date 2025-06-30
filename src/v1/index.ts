import { buildQueryString } from "../utils";

export const routes = {
  healthCheck() {
    return "/v1";
  },

  battlepass(season?: number) {
    const url = "/v1/battlepass";

    return buildQueryString(url, {
      season: season ?? undefined,
    });
  },

  allAchievements(page = 1, perPage = 10) {
    const url = "/v1/achievements";

    return buildQueryString(url, {
      page: page > 0 ? page : 1,
      perPage: perPage > 0 ? perPage : 10,
    });
  },

  achievement(name: string) {
    if (!name) {
      throw new Error("Achievement name is required");
    }

    return `/v1/achievement/${encodeURIComponent(name)}`;
  },

  allMaps(page = 1, perPage = 10) {
    const url = "/v1/maps";

    return buildQueryString(url, {
      page: page > 0 ? page : 1,
      limit: perPage > 0 ? perPage : 10,
    });
  },

  findPlayer(username: string) {
    if (!username) {
      throw new Error("Username is required");
    }

    return `/v1/find-player/${encodeURIComponent(username)}`;
  },

  getPlayer(player: string, season?: number) {
    if (!player) {
      throw new Error("Player identifier is required");
    }

    return buildQueryString(`/v1/player/${encodeURIComponent(player)}`, {
      season: season ?? undefined,
    });
  },

  updatePlayer(player: string) {
    if (!player) {
      throw new Error("Player identifier is required");
    }

    return `/v1/player/${encodeURIComponent(player)}/update`;
  },
};

export * from "./api";
