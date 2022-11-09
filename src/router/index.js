const express = require("express");

const apiRouter = require("./sousRouter/api");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Tennis Club de Guérande");
});

router.use("/api", apiRouter);

module.exports = router;
