const express = require("express");
const mongoose = require("mongoose");

const partenairesController = require("../../controller/Partenaires");

let router = express.Router();

router.get("/", async (req, res) => {
  res.send("Partenaire");
});

module.exports = router;
