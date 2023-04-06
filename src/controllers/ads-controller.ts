import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares";

export async function getAds(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getAdsById(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function createAds(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{

    } catch(err){
        console.log(err);
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
