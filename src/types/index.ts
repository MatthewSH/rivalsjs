export interface ClientConfig {
  apiKey: string;
}

/**
 * A utility type to convert a string from snake_case to camelCase.
 * e.g. 'server_response_time' -> 'serverResponseTime'
 */
export type CamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${P1}${Uppercase<P2>}${CamelCase<P3>}`
    : S;

/**
 * A utility type to convert all keys of an object from snake_case to camelCase, including nested objects and arrays of objects.
 */
export type KeysToCamelCase<T> = T extends (infer U)[]
  ? KeysToCamelCase<U>[]
  : // biome-ignore lint/complexity/noBannedTypes: Allowed
    T extends Date | Function | RegExp
    ? T
    : T extends object
      ? { [K in keyof T as CamelCase<K & string>]: KeysToCamelCase<T[K]> }
      : T;
