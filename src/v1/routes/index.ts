import { err, fromPromise, ok, type Result } from "neverthrow";
import type { Client } from "@/index";
import type { APIHealthCheckResponse, HealthCheckResponse } from "@/types/v1";
import { routes } from "@/v1";
import { transformHealthCheckResponse } from "../transformers";

export async function healthCheck(
  client: Client,
): Promise<Result<HealthCheckResponse, Error>> {
  const request = client.get(routes.healthCheck());

  return fromPromise(
    request.json<APIHealthCheckResponse>(),
    (error) => new Error(error as string),
  ).andThen((response) => ok(transformHealthCheckResponse(response)));
}
