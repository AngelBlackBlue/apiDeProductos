import fastify from "fastify";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:dd/mm/yyyy HH:MM:ss (UTC-3)", 
        ignore: "pid,hostname",
      },
    },
  },
});

export default app;
