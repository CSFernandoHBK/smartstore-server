import { Response } from "express";
import httpStatus from "http-status";
import { Ads, AdsEntity, AdsNew } from "protocols";
import { adsSchema } from "../schemas";
import adsService from "../services/ads-service";
import { AuthenticatedRequest } from "../middlewares";

export async function getAds(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{
        const result: AdsEntity[] = await adsService.getAds(userId)
        return res.status(200).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getAdsById(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const adsId = req.params.adsId;

    try{
        const result = await adsService.getAdsById(userId, Number(adsId))
        return res.status(200).send(result);
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

export async function createAds(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const adsInfo: AdsNew = req.body;

    const validation = adsSchema.validate(adsInfo, {abortEarly: true})

    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        const result = await adsService.createAds(userId, adsInfo);
        return res.status(201).send(result);
    } catch(err){
        console.log(err);
        if(err.name==="forbiddenError"){
            return res.status(403).send(err.message)
        }
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function updateAds(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function deleteAds(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}
