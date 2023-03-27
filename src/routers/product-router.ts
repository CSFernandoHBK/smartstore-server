import { getProductById, getProducts } from "../controllers/product-controller";
import { Router } from "express";
import { authenticateToken } from "../middlewares";

const productRouter = Router();

productRouter
    .all("/*", authenticateToken)
    .get("/", getProducts)
    .get("/:productId", getProductById)

export {productRouter};