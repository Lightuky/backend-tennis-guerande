const express = require("express");

const apiRouter = require("./api/apiRouter");

let router = express.Router();

router.use("api", apiRouter);

router.get("/", (req, res) => {
  res.send("Tennis Club de Guérande");
});

module.exports = router;
