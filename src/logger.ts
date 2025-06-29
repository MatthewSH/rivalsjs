import pino from "pino";

export const logger = pino({
  name: "rivalsjs",
  level:
    process.env.NODE_ENV === "production"
      ? process.env.LOG_LEVEL || "info"
      : "debug",
  transport:
    process.env.NODE_ENV === "production"
      ? undefined
      : {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        },
});
