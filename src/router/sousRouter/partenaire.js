import express from "express";
import mongoose from "mongoose";

import { partenaireController } from "../../controller/partenaire.js";

export const partenaireRouter = express.Router()

.get("/", async (req, res) => {
  res.send("Partenaire");
});
