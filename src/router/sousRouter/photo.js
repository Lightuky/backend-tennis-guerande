const express = require("express");
const mongoose = require("mongoose");

const photoController = require("../../controller/photo");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Photo");
});

module.exports = router;
