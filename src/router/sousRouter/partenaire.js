const express = require("express");
const mongoose = require("mongoose");

const partenaireController = require("../../controller/partenaire");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Partenaire");
});

router.get("/recuperer", async (req, res) => {
  const partenaires = await partenaireController.obtenirTousLesPartenaires();
  res.send(partenaires);
});

router.get("/recuperer/:id", async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const partenaire = await partenaireController.obtenirPartenaireParId(id);
  res.send(partenaire);
});

router.get("/ajouter", async (req, res) => {
  /*
  const test = {
    nom: "Tennis Club de Guérande",
    logo: "62b63303dd5a0c35b2cb8aa5",
    afficher: true,
  };
  */
  const test = {
    nom: "Marc Dorcel",
    logo: "62b634c5da57469629288b0d",
    afficher: true,
  };
  await partenaireController.ajouterPartenaire(test);
  res.redirect("/partenaire");
});

router.get("/modifier/:id", async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const test = {
    _id: id,
    nom: "Marc Dorcel",
    logo: "62b634c5da57469629288b0d",
    afficher: true,
  };
  await partenaireController.modifierPartenaire(test);
  res.redirect("/partenaire");
});

router.get("/masquer/:id", async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  let partenaire = await partenaireController.obtenirPartenaireParId(id);
  partenaire.afficher = !partenaire.afficher;
  await partenaireController.modifierPartenaire(partenaire);
  res.redirect("/partenaire");
});

module.exports = router;
