import type { HealthCheckResponse } from "types/v1";

export function transformHealthCheckResponse(
  response: HealthCheckResponse,
): HealthCheckResponse {
  return response;
}

export * from "./achievements";
export * from "./battlepass";
export * from "./maps";
export * from "./player";
