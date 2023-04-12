import { createFinance, getFinance } from "../controllers/finance-controller";
import { Router } from "express";
import { authenticateToken } from "../middlewares";

const financeRouter = Router();

financeRouter
    .all("/*", authenticateToken)
    .post("/", createFinance)
    .get("/", getFinance)

export {financeRouter}