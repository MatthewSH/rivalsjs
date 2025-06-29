import camelcaseKeys from "camelcase-keys";
import { BASE_ASSET_URL } from "@/constants";

// biome-ignore lint/suspicious/noExplicitAny: This is a conversion utility
export function camelJson<T>(obj: Record<string, any>): T {
  return camelcaseKeys(obj, {
    deep: true,
  }) as T;
}

export function convertToAssetUrl(input: string): string {
  const parts: string[] = input.split("/");

  if (parts.at(0) === "rivals") {
    parts.shift();
  }

  return `${BASE_ASSET_URL}/${parts.join("/")}`;
}

export function buildQueryString(
  url: string,
  params: Record<string, string | number | boolean>,
): string {
  const queryString = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      queryString.append(key, String(value));
    }
  }

  if (queryString.toString() === "") {
    return url;
  }

  return `${url}?${queryString.toString()}`;
}
