import express from "express";

import navbar from "../../api/navbar.json" assert { type: "json" };

export const apiRouter = express.Router()

.get("/", (req, res) => {
  res.send("Api");
})

.get("/navbar", (req, res) => {
  res.status(200).json(navbar);
});
