import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/product-controller";
import { Router } from "express";
import { authenticateToken } from "../middlewares";

const productRouter = Router();

productRouter
    .all("/*", authenticateToken)
    .get("/", getProducts)
    .get("/:productId", getProductById)
    .post("/", createProduct)
    .put("/", updateProduct)
    .delete("/:productId", deleteProduct)

export {productRouter};