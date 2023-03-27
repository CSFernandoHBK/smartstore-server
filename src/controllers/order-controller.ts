import { Response } from "express";
import httpStatus from "http-status";
import { Order } from "../protocols";
import { AuthenticatedRequest } from "../middlewares";

export async function getOrder(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{
        const result

        return res.status(200).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getOrderById(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const orderId = req.params.productId;

    try{
        const result: Order = await productService.getProductById(userId, Number(productId));

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

export async function createOrder(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function updateOrder(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function deleteOrder(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}


