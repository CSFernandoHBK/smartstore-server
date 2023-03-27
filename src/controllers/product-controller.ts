import { Response } from "express";
import httpStatus from "http-status";
import { Product, ProductEntity, ProductNew } from "../protocols";
import productService from "../services/product-service";
import { AuthenticatedRequest } from "../middlewares";
import { productSchema } from "../schemas";

export async function getProducts(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{
        const result: ProductEntity[] = await productService.getProducts(userId);

        return res.status(200).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getProductById(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const productId = req.params.productId;

    try{
        const result: ProductEntity = await productService.getProductById(userId, Number(productId));

        return res.status(200).send(result);
    } catch(err){
        console.log(err)
        if(err.name==="NotFoundError"){
            return res.status(404).send(err.message)
        }
        if(err.name==="forbiddenError"){
            return res.status(403).send(err.message)
        }
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function createProduct(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const productInfo: ProductNew = req.body;

    const validation = productSchema.validate(productInfo, {abortEarly: true})

    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        const result = await productService.newProduct(userId, productInfo)

        return res.status(201).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function updateProduct(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function deleteProduct(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const productId = req.params.productId;

    try{
        await productService.deleteProduct(userId, Number(productId));
        return res.sendStatus(204)
    } catch(err){
        console.log(err);
        if(err.name==="NotFoundError"){
            return res.status(404).send(err.message)
        }
        if(err.name==="forbiddenError"){
            return res.status(403).send(err.message)
        }
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

