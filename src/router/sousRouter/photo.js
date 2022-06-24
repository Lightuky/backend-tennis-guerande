const express = require("express");

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

module.exports = router;
