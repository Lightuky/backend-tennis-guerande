const mongoose = require("mongoose");

const Photo = require("../db/schema/photo");

async function obtenirPhotoParId(id) {
  try {
    const photo = await Photo.findById(mongoose.Types.ObjectId(id));
    console.log(photo);
    if (!photo) {
      return console.log("Aucune image avec cet ID n'a été trouvée!");
    }
    return photo;
  } catch (error) {
    console.log(`C'est une erreur ${error}.`);
    return error;
  }
}

async function ajouterPhoto(element) {
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
    console.log("L'image a été ajoutée!");
    return photo;
  } catch (error) {
    console.log(`C'est une erreur ${error}.`);
    return error;
  }
}

async function modifierPhoto(element) {
  try {
    if (element._id) {
      const photo = await Photo.findByIdAndUpdate(
        mongoose.Types.ObjectId(element._id),
        element
      );
      if (!photo) {
        return console.log("Impossible de modifier cette image.");
      }
      console.log("L'image a été modifiée!");
      return photo;
    }
  } catch (error) {
    console.log(`C'est une erreur ${error}.`);
    return error;
  }
}

module.exports = {
  obtenirPhotoParId,
  ajouterPhoto,
  modifierPhoto,
};
