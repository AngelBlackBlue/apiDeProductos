import { FastifyInstance } from "fastify";
import { getProducts, getProductsById } from "../controllers/product.contoller";

export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/products", getProducts );
  fastify.get("/products/:id", getProductsById );
}
