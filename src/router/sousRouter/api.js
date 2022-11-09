const express = require("express");

const navbar = require("../../api/navbar.json");
const photoRouter = require("./Photos");
const partenaireRouter = require("./Partenaires");
const personnesRouter = require("./Personnes");
const employesRouter = require("./Employes");
const terrainRouter = require("./Terrains");
const articleRouter = require("./Articles");
const reseauxRouteur = require("./Reseaux");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Api");
});

router.get("/navbar", (req, res) => {
  res.status(200).json(navbar);
});

router.use("/photos", photoRouter);
router.use("/partenaire", partenaireRouter);
router.use("/personnes", personnesRouter);
router.use("/employes", employesRouter);
router.use("/terrains", terrainRouter);
router.use("/articles", articleRouter);
router.use("/reseaux", reseauxRouteur);

module.exports = router;
