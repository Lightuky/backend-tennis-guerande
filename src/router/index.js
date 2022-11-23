import express from "express";

import { apiRouter } from "./sousRouter/api.js";
import { partenaireRouter } from "./sousRouter/partenaire.js";
import { photoRouter } from "./sousRouter/photo.js";

export const router = express.Router()

.get("/", (req, res) => {
  res.send("Tennis Club de Guérande");
})

.use("/api", apiRouter)

.use("/partenaire", partenaireRouter)

.use("/photo", photoRouter);
