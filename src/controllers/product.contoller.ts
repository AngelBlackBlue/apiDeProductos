import { FastifyReply, FastifyRequest,  } from "fastify";
import { AppDataSource } from "../database/database";
import { product } from "../entity/product";

const productRepository = AppDataSource.getRepository(product)


export const getProducts = async (request: FastifyRequest, replay: FastifyReply) => {
    try {
        
        const product = await productRepository.find();
        return replay.status(201).send(product)    

        
    } catch (error) {
        console.error(error)
        return replay.status(500).send({message: "Server error", error})
        
    }
}