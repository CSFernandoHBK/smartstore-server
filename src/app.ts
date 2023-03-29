import express, { Request, Response } from "express";
import cors from "cors"
import { authRouter, orderRouter, productRouter, userRouter } from "./routers";

const app = express();

app
    .use(cors())
    .use(express.json())
    .use("/health", (req: Request, res: Response) => res.send("Tudo jóia no smartstore!"))
    .use("/user", userRouter)
    .use("/auth", authRouter)
    .use("/product", productRouter)
    .use("/order", orderRouter)

export default app;