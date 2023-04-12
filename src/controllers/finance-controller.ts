import { FinanceNew } from "../protocols";
import financeService from "../services/finance-service";
import { AuthenticatedRequest } from "../middlewares";
import { Response } from "express";
import httpStatus from "http-status";
import { financeSchema } from "../schemas";

export async function createFinance(req: AuthenticatedRequest, res: Response){
    const {userId} = req;
    const financeInfo: FinanceNew = req.body;

    const validation = financeSchema.validate(financeInfo, {abortEarly: true})

    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        const result = await financeService.createFinance(userId, financeInfo)
        return res.status(201).send(result);
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

export async function getFinance(req: AuthenticatedRequest, res: Response){
    const {userId} = req;

    try{
        const result = await financeService.getFinance(userId);

        return res.status(200).send(result)
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"]) 
    }
}