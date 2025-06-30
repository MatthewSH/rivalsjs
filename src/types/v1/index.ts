export type HealthCheckResponse = {
  error: boolean;
  message: string;
  status: number;
  serverTime: string;
  serverResponseTime: string;
};

export * from "./achievements";
export * from "./battlepass";
export * from "./heroes";
export * from "./maps";
export * from "./player";
