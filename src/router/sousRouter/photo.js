const express = require("express");
const mongoose = require("mongoose");

const photoController = require("../../controller/photo");

let router = express.Router();

router.get("/", (req, res) => {
  //const id = mongoose.Types.ObjectId("62b63303dd5a0c35b2cb8aa5");
  photoController.test();
  res.send("Photo");
});

router.get("/recuperer/id/:id", async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const photo = await photoController.obtenirPhotoParId(id);
  res.send(photo);
});

router.get("/recuperer/categorie/:categorie", async (req, res) => {
  const categorie = req.params.categorie;
  const partenaires = await photoController.obtenirPhotosParCategorie(
    categorie
  );
  res.send(partenaires);
});

router.get("/ajouter", async (req, res) => {
  /*
  const test = {
    nom: "logo-tennis-club-guerande.png",
    description: "Logo du Tennis Club de Guérande",
    categorie: "logo",
    afficher: true,
  };
  */
  const test = {
    nom: "marc-dorcel.jpg",
    description: "Logo de Marc Dorcel",
    categorie: "logo",
    afficher: true,
  };
  await photoController.ajouterPhoto(test);
  res.redirect("/photo");
});

router.get("/modifier/:id", async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  const test = {
    _id: id,
    nom: "marc-dorcel.jpg",
    description: "Logo de Marc Dorcel",
    categorie: "logo",
    afficher: true,
  };
  await photoController.modifierPhoto(test);
  res.redirect("/photo");
});

router.get("/masquer/:id", async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  let photo = await photoController.obtenirPhotoParId(id);
  photo.afficher = !photo.afficher;
  await photoController.modifierPhoto(photo);
  res.redirect("/photo");
});

module.exports = router;
