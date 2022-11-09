import express from "express";

import apiRouter from "./sousRouter/api";
import partenaireRouter from "./sousRouter/partenaire";
import photoRouter from "./sousRouter/photo";

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Tennis Club de Guérande");
});

router.use("/api", apiRouter);

router.use("/partenaire", partenaireRouter);

router.use("/photo", photoRouter);

module.exports = router;
