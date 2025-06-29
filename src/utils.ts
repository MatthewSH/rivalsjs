import camelcaseKeys from "camelcase-keys";

// biome-ignore lint/suspicious/noExplicitAny: This is a conversion utility
export function camelJson<T>(obj: Record<string, any>): T {
  return camelcaseKeys(obj, {
    deep: true,
  }) as T;
}
