export interface ClientConfig {
  apiKey: string;
  retryOnRateLimit?: boolean;
  verifyRateLimitHeader?: boolean;
}
