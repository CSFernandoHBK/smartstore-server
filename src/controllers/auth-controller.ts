import { Request, Response } from "express";
import httpStatus from "http-status";

export async function signIn(req: Request, res: Response){
    try{

    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])   
    }
}