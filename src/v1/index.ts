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
};

export * from "./routes";
