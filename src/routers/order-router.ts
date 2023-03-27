import { Router } from "express";
import { authenticateToken } from "../middlewares";

const orderRouter = Router();

orderRouter
    .all("/*", authenticateToken)
    .get("/", getProducts)
    .get("/:productId", getProductById)
    .post("/", createProduct)
    .put("/", updateProduct)
    .delete("/", deleteProduct)

export {orderRouter};