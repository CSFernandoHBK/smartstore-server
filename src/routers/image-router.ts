import { authenticateToken } from "../middlewares";
import { getImageByProductId, imageUpload } from "../controllers/image-controller";
import { Router } from "express";

const imageRouter = Router();

imageRouter
    .all("/*", authenticateToken)
    .post("/:productId", imageUpload)
    .get("/:productId", getImageByProductId)

export {imageRouter}