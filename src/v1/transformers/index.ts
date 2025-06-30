import type { HealthCheckResponse } from "types/v1";

export function transformHealthCheckResponse(
  data: HealthCheckResponse,
): HealthCheckResponse {
  return data;
}

export * from "./achievements";
export * from "./battlepass";
export * from "./heroes";
export * from "./maps";
export * from "./player";
