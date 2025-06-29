import type { KeysToCamelCase } from ".";

export interface APIHealthCheckResponse {
  error: boolean;
  message: string;
  status: number;
  server_time: string;
  server_response_time: string;
}

export type APIBattlepassResponse = {
  season: number;
  season_name: string;
  items: {
    name: string;
    image: string;
    cost: string;
    isLuxury: boolean;
  }[];
};

export type HealthCheckResponse = KeysToCamelCase<APIHealthCheckResponse>;
export type BattlepassResponse = KeysToCamelCase<APIBattlepassResponse>;
