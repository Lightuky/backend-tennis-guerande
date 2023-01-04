import express from "express";

import { apiRouter } from "./sousRouter/api.js";

export const router = express.Router()

.get("/", (req, res) => {
  res.send("Tennis Club de Guérande");
})

.use("/api", apiRouter);
