import { Response } from "express";
import httpStatus from "http-status";
import { Product } from "protocols";
import productService from "../services/product-service";
import { AuthenticatedRequest } from "../middlewares";

export async function getProducts(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{
        const result: Product[] = await productService.getProducts(userId);

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
        const result: Product = await productService.getProductById(userId, Number(productId));

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

