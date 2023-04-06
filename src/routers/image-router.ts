import { imageUpload } from "../controllers/image-controller";
import { Router } from "express";

const imageRouter = Router();

imageRouter
    .post("/upload", imageUpload)

export {imageRouter}