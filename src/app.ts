import express, { Request, Response } from "express";
import cors from "cors"
import {authRouter} from "./routers/auth-router";
import { userRouter } from "./routers/user-router";

const app = express();

app
    .use(cors())
    .use(express.json())
    .use("/health", (req: Request, res: Response) => res.send("Tudo jóia no smartstore!"))
    .use("/user", userRouter)
    .use("/auth", authRouter)

export default app;