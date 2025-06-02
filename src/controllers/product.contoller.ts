import { FastifyReply, FastifyRequest } from "fastify";
import { AppDataSource } from "../database/database";
import { product } from "../entity/product";

const productRepository = AppDataSource.getRepository(product);

export const getProducts = async (
  request: FastifyRequest,
  replay: FastifyReply
) => {
  try {
    const products = await productRepository.find();
    return replay.status(201).send(products);
  } catch (error) {
    console.error(error);
    return replay.status(500).send({ message: "Server error", error });
  }
};

export const getProductById = async (
  request: FastifyRequest,
  replay: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const product = await productRepository.findOneBy({ id: parseInt(id) });
    if (!product) {
      return replay.status(400).send({ message: "Product not found" });
    }

    return replay.status(201).send(product);
  } catch (error) {
    console.error(error);
    return replay.status(500).send({ message: "Server error", error });
  }
};


export const createProduct = async (
  request: FastifyRequest,
  replay: FastifyReply
) => {
  try {
    const { name, price } = request.body as {name: string, price: number } 
    const product = await productRepository.save({ name, price});

    return replay.status(200).send(product);
  } catch (error) {
    console.error(error);
    return replay.status(500).send({ message: "Server error", error });
  }
};
