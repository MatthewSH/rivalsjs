import pino from "pino";

// Helper function to get transport configuration with graceful fallback
function getTransportConfig() {
  if (process.env.NODE_ENV === "production") {
    return undefined;
  }

  // Try to use pino-pretty if available, fall back to default if not
  try {
    require.resolve("pino-pretty");
    return {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    };
  } catch {
    // pino-pretty not available, use default transport
    return undefined;
  }
}

export const logger = pino({
  name: "rivalsjs",
  level:
    process.env.NODE_ENV === "production"
      ? process.env.LOG_LEVEL || "info"
      : "debug",
  transport: getTransportConfig(),
});
