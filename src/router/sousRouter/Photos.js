import express from "express";

import { PhotosController } from "../../controller/Photos.js";

export const PhotosRouter = express.Router()

.get("/", (req, res) => {
  res.send("Photo");
});
