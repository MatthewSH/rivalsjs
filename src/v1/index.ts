import { buildQueryString } from "@/utils";

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
};

export * from "./routes";
