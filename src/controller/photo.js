const mongoose = require("mongoose");

const Photo = require("../db/schema/photo");

async function obtenirImageParId(id) {
  try {
    const photo = await Photo.findById(mongoose.Types.ObjectId(id));
    console.log(photo);
    if (!photo) {
      return console.log("Aucune image n'a cet ID!");
    }
    return photo;
  } catch (error) {
    return console.log(`C'est une erreur ${error}.`);
  }
}

async function ajouterImage(element) {
  try {
    const photo = new Photo({
      nom: element.nom,
      description: element.description,
      categorie: element.categorie,
      afficher: element.afficher,
    });
    console.log(photo);
    if (!photo) {
      return console.log("Impossible d'ajouter cette image.");
    }
    await photo.save();
    console.log("Image ajoutée.");
    return photo;
  } catch (error) {
    return `C'est une erreur ${error}.`;
  }
}

module.exports = {
  obtenirImageParId,
  ajouterImage,
};
