import { Response } from "express";
import httpStatus from "http-status";
import { Order, OrderNew } from "../protocols";
import { AuthenticatedRequest } from "../middlewares";
import orderService from "../services/order-service";
import { orderSchema } from "../schemas";

export async function getOrder(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{
        const result: Order[] = await orderService.getOrder(userId);
        return res.status(200).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getOrderById(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const orderId = req.params.orderId;

    try{
        const order = await orderService.getOrderById(userId, Number(orderId));
        const products = await orderService.getProductsbyOrderId(Number(orderId));
        
        return res.status(200).send({...order, products});
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
    const orderInfo: OrderNew = req.body;

    const validation = orderSchema.validate(orderInfo, {abortEarly: true})

    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        const result = await orderService.createOrder(userId, orderInfo)
        return res.status(201).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function addProductsForOrder(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const orderId = req.params.orderId;
    const products: number[] = req.body;

    try{
        const result = await orderService.addProductsForOrder(userId, Number(orderId), products);
        return res.status(201).send("Created");
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
    const orderId = req.params.orderId;

    try{
        await orderService.deleteOrder(userId, Number(orderId));
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


