import { Response } from "express";
import httpStatus from "http-status";
import trackingService from "../services/tracking-service";
import { AuthenticatedRequest } from "../middlewares";

export async function getTracking(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const codes: string[] = req.body;

    try{
        const result = await trackingService.getTracking(codes);
        return res.send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}
