import { authenticateToken } from "../middlewares";
import { getCodeByOrderId, getTracking } from "../controllers/tracking-controller";
import { Router } from "express";

const trackingRouter = Router();

trackingRouter
    .all("/*", authenticateToken)
    .post("/", getTracking)
    .get("/:orderId", getCodeByOrderId)

export {trackingRouter}