const express = require("express");
const mongoose = require("mongoose");

const partenaireController = require("../../controller/partenaire");

let router = express.Router();

router.get("/", async (req, res) => {
  res.send("Partenaire");
});

module.exports = router;
