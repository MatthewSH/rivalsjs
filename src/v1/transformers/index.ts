import type { APIHealthCheckResponse, HealthCheckResponse } from "@/types/v1";
import { camelJson } from "@/utils";

export function transformHealthCheckResponse(
  response: APIHealthCheckResponse,
): HealthCheckResponse {
  return camelJson<HealthCheckResponse>(response);
}
