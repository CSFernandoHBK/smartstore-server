import { createAds, deleteAds, getAds, getAdsById, updateAds } from "../controllers/ads-controller";
import { Router } from "express";
import { authenticateToken } from "../middlewares";

const adsRouter = Router();

adsRouter
    .all("/*", authenticateToken)
    .get("/", getAds)
    .get("/:adsId", getAdsById)
    .post("/", createAds)
    .put("/", updateAds)
    .delete("/:adsId", deleteAds)

export {adsRouter};