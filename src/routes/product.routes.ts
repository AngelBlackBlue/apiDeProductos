import { FastifyInstance } from "fastify";
import { getProducts, getProductById, createProduct } from "../controllers/product.contoller";


export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/products", getProducts );
  fastify.get("/products/:id", getProductById );
  fastify.post("/products", createProduct);

}
