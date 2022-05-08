const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Tennis Club de Guérande");
});

module.exports = router;
