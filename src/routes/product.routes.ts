import { FastifyInstance } from "fastify";

export default async function productRoutes(fastify: FastifyInstance) {
  fastify.get("/products", async (request, replay) => {
    return replay.send("Hola mundo");
  });
}
