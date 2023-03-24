import { signIn, signUp } from "controllers/user-controller";
import { Router } from "express";

const userRouter = Router();

userRouter
    .post("/sign-in", signIn)
    .post("/sign-up", signUp)

export {userRouter}