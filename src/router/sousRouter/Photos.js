const express = require("express");
const mongoose = require("mongoose");

const photoController = require("../../controller/Photos");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Photo");
});

module.exports = router;
