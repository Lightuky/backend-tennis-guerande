const express = require("express");

const apiRouter = require("./sousRouter/api");
const photoRouter = require("./sousRouter/photo");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Tennis Club de Guérande");
});

router.use("/api", apiRouter);

router.use("/photo", photoRouter);

module.exports = router;
