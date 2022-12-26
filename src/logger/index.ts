import pino from "pino";

const logger = pino({
  prettifier: {
    colorsize: true,
    translateTime: true,
  },
  transport: {
    target: 'pino-pretty',
    timestamp: () => `,'time':'${new Date().toISOString()}'`,
    options: {
      colorize: true,
    },
  },
});

export default logger;
