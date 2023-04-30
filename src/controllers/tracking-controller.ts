import { Response } from "express";
import httpStatus from "http-status";
import trackingService from "../services/tracking-service";
import { AuthenticatedRequest } from "../middlewares";
import {badRequestError} from "../errors"

export async function getTracking(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const codes: string[] = req.body;

    try{
        if(!codes || !Array.isArray(codes)){
            return res.status(400).send("Invalid body");
        }

        const codeVerify = codes.filter((code) => typeof(code)!=="string")

        if(codeVerify.length !== 0){
            throw badRequestError()
        }

        const result = await trackingService.getTracking(codes);
        return res.send(result);
    } catch(err){
        console.log(err);
        if(err.name==="badRequestError"){
            return res.status(400).send(err.message)
        }
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getCodeByOrderId(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const orderId = req.params.orderId;

    try{
        const result = await trackingService.getCodeByOrderId(Number(orderId));
        return res.status(200).send(result.trackingCode);

    } catch(err){
        console.log(err);
        if(err.name === "NotFoundError"){
            return res.status(404).send(err.message);
        }
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

