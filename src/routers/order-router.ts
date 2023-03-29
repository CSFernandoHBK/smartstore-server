import { createOrder, deleteOrder, getOrder, getOrderById, updateOrder } from "../controllers/order-controller";
import { Router } from "express";
import { authenticateToken } from "../middlewares";

const orderRouter = Router();

orderRouter
    .all("/*", authenticateToken)
    .get("/", getOrder)
    .get("/:orderId", getOrderById)
    .post("/", createOrder)
    .put("/", updateOrder)
    .delete("/:orderId", deleteOrder)

export {orderRouter};