import { signIn } from "../controllers/auth-controller";
import { Router } from "express";

const authRouter = Router();

authRouter
    .get("/", signIn);

export {authRouter};