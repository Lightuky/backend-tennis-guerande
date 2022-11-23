import express from "express";
import mongoose from "mongoose";

import { PartenairesController } from "../../controller/Partenaires.js";

export const PartenairesRouter = express.Router()

.get("/", async (req, res) => {
  res.send("Partenaire");
});
