import { createFinance, getFinance, getOnlySells } from "../controllers/finance-controller";
import { Router } from "express";
import { authenticateToken } from "../middlewares";

const financeRouter = Router();

financeRouter
    .all("/*", authenticateToken)
    .post("/", createFinance)
    .get("/", getFinance)
    .get("/sells", getOnlySells)

export {financeRouter}