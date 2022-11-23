import express from "express";
import mongoose from "mongoose";

import { photoController } from "../../controller/photo.js";

export const photoRouter = express.Router()

.get("/", (req, res) => {
  res.send("Photo");
});
