import { Request, Response } from "express";
import httpStatus from "http-status";
import { loginSchema } from "../schemas";
import authService from "../services/auth-service";

export async function signIn(req: Request, res: Response){
    const user: loginInfo = req.body;

    const validation = loginSchema.validate(user, {abortEarly: true})

    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }
    try{
        const {email, password} = user;
        const emailExists = await authService.verifyEmail(email)
        if(!emailExists){
            return res.status(401).send("E-mail not found!")
        }
        const token = await authService.signIn(email, password)

        console.log(token);

        return res.send({token: token})
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])   
    }
}

type loginInfo = {
    email: string,
    password: string
}