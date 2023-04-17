import { authenticateToken } from "../middlewares";
import { signIn, signOut } from "../controllers/auth-controller";
import { Router } from "express";

const authRouter = Router();

authRouter
    .post("/", signIn)
    .delete("/", authenticateToken, signOut)

export {authRouter};