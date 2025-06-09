import { FastifyReply, FastifyRequest } from "fastify";
import { Product } from "../entity/product";


export const getProducts = async (
  request: FastifyRequest,
  replay: FastifyReply
) => {
  try {
    const products = await Product.find();
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
    const product = await Product.findOneBy({ id: parseInt(id) });
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
    const { name, price } = request.body as { name: string; price: number };
    const product = await Product.save({ name, price });

    return replay.status(200).send(product);
  } catch (error) {
    console.error(error);
    return replay.status(500).send({ message: "Server error", error });
  }
};

export const updateProductById = async (
  request: FastifyRequest,
  replay: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const body = request.body as { name: string; price: number };
    let product = await Product.findOneBy({ id: parseInt(id) });
    if (!product) {
      return replay.status(400).send({ message: "Product not found" });
    }

    product = { ...product, ...body };

    await Product.save(product);

    return replay.status(201).send(product);
  } catch (error) {
    console.error(error);
    return replay.status(500).send({ message: "Server error", error });
  }
};

export const deleteProductById = async (
  request: FastifyRequest,
  replay: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    
    const product = await Product.findOneBy({ id: parseInt(id) });
    if (!product) {
      return replay.status(400).send({ message: "Product not found" });
    }

    await Product.delete(product);

    return replay.status(201).send({ message: "Product delete", product});
  } catch (error) {
    console.error(error);
    return replay.status(500).send({ message: "Server error", error });
  }
};
