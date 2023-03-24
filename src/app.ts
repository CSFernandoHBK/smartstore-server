import express, { Request, Response } from "express";
import cors from "cors"

const app = express();

app
    .use(cors())
    .use(express.json())
    .use("/health", (req: Request, res: Response) => res.send("Tudo jóia no smartstore!"))

export default app;