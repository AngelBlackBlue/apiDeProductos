import fastify from "fastify";
import { productRoutes } from "./routes/product.routes";

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

app.register(productRoutes);

export default app;
