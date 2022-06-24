const express = require("express");
const mongoose = require("mongoose");

const photoController = require("../../controller/photo");

let router = express.Router();

router.get("/", (req, res) => {
  res.send("Photo");
});

router.get("/recuperer/:id", async (req, res) => {
  const id = req.params.id;
  const photo = await photoController.obtenirImageParId(id);
  res.send(photo);
});

router.get("/ajouter", async (req, res) => {
  const test = {
    nom: "Goku.jpg",
    description: "Goku prêt au combat",
    categorie: "Aucune",
    afficher: true,
  };
  await photoController.ajouterImage(test);
  res.redirect("/photo");
});

router.get("/modifier/:id", async (req, res) => {
  const test = {
    _id: mongoose.Types.ObjectId(req.params.id),
    nom: "Goku.jpg",
    description: "Goku prêt au combat",
    categorie: "Joueur",
    afficher: false,
  };
  await photoController.modifierImage(test);
  res.redirect("/photo");
});

module.exports = router;
