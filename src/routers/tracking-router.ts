import { getCodeByOrderId, getTracking } from "../controllers/tracking-controller";
import { Router } from "express";

const trackingRouter = Router();

trackingRouter
    .get("/", getTracking)
    .get("/:orderId", getCodeByOrderId)

export {trackingRouter}