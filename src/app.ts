import express, { Request, Response } from "express";
import cors from "cors"
import { adsRouter, authRouter, financeRouter, imageRouter, orderRouter, productRouter, trackingRouter, userRouter } from "./routers";

const app = express();

app
    .use(cors())
    .use(express.json())
    .use("/health", (req: Request, res: Response) => res.send("Tudo jóia no smartstore!"))
    .use("/user", userRouter)
    .use("/auth", authRouter)
    .use("/product", productRouter)
    .use("/order", orderRouter)
    .use("/tracking", trackingRouter)
    .use("/ads", adsRouter)
    .use("/finance", financeRouter)
    .use("/image", imageRouter)

export default app;