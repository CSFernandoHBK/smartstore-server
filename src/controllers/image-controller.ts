import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares";
import imageService from "../services/image-service";

export async function imageUpload(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const link = req.body.link;
    const productId = req.params.productId

    try{
        const result = await imageService.imageUpload(userId, Number(productId), link)
        res.status(200).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getImageByProductId(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const productId = req.params.productId

    try{
        const result = await imageService.getImageByProductId(userId, Number(productId))
        res.status(200).send(result);
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

