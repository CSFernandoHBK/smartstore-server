import { getTracking } from "../controllers/tracking-controller";
import { Router } from "express";

const trackingRouter = Router();

trackingRouter
    .get("/", getTracking)

export {trackingRouter}