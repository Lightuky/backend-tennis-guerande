import express from "express";
import mongoose from "mongoose";

import partenaireController from "../../controller/partenaire";

let router = express.Router();

router.get("/", async (req, res) => {
  res.send("Partenaire");
});

module.exports = router;
