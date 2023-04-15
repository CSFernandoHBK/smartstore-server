import { getCodeByOrderId, getTracking } from "../controllers/tracking-controller";
import { Router } from "express";

const trackingRouter = Router();

trackingRouter
    .post("/", getTracking)
    .get("/:orderId", getCodeByOrderId)

export {trackingRouter}