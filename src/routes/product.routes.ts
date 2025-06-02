import { FastifyInstance } from "fastify";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/product.contoller";

export const productRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/products", getProducts);
  fastify.get("/products/:id", getProductById);
  fastify.post("/products", createProduct);
  fastify.put("/products/:id", updateProductById);
  fastify.delete("/products/:id", deleteProductById);
};
