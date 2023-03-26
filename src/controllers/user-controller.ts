import { Request, Response } from "express";
import httpStatus from "http-status";
import { userSchema } from "../schemas";
import userService from "../services/user-service";

export async function signUp(req: Request, res: Response){
    const user: userInfo = req.body;

    const validation = userSchema.validate(user, {abortEarly: true})

    if(validation.error){
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        const {username, email, password} = user;

        const emailExists = await userService.verifyEmail(email);
        if(emailExists){
            return res.status(400).send("E-mail already exists!")
        }

        const result = await userService.signUp(username, email, password)

        return res.status(201).send(result)
    } catch(err){
        console.log(err);
        return res.status(500).send(httpStatus["500_MESSAGE"])
    }
}

type userInfo = {
    username: string,
    email: string,
    password: string
}