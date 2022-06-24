const express = require("express");
const fs = require("fs");
const fsPromises = require("fs/promises");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Api");
});

module.exports = router;
