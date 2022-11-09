const express = require("express");

const navbar = require("../../api/navbar.json");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Api");
});

router.get("/navbar", (req, res) => {
  res.status(200).json(navbar);
});

module.exports = router;
