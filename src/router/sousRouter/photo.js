import express from "express";
import mongoose from "mongoose";

import photoController from "../../controller/photo";

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Photo");
});

module.exports = router;
