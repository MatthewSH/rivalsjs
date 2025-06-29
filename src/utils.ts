import { BASE_ASSET_PREMIUM_URL, BASE_ASSET_URL } from "./constants";

export function convertToAssetUrl(input: string): string {
  let parts: string[] = input.split("/");
  parts = parts.filter((part) => part !== "");

  if (parts.at(0) === "premium") {
    return `${BASE_ASSET_PREMIUM_URL}/${parts.join("/")}`;
  }

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
