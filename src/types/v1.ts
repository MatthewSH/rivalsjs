/**
 * A utility type to convert a string from snake_case to camelCase.
 * e.g. 'server_response_time' -> 'serverResponseTime'
 */
type CamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${P1}${Uppercase<P2>}${CamelCase<P3>}`
    : S;

/**
 * A utility type to convert all keys of an object from snake_case to camelCase.
 */
type KeysToCamelCase<T> = {
  [K in keyof T as CamelCase<K & string>]: T[K];
};

export interface APIHealthCheckResponse {
  error: boolean;
  message: string;
  status: number;
  server_time: string;
  server_response_time: string;
}

export type HealthCheckResponse = KeysToCamelCase<APIHealthCheckResponse>;
