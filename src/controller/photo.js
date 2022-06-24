const mongoose = require("mongoose");

const Photo = require("../db/schema/photo");

async function obtenirPhotoParId(id) {
  try {
    const photo = await Photo.findById(id);
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

async function obtenirPhotosParCategorie(categorie) {
  try {
    const photos = await Photo.find({ categorie: categorie }).exec();
    console.log(photos);
    if (!photos) {
      console.log("Aucune image avec cet ID n'a été trouvée!");
    }
    return photos;
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
      const photo = await Photo.findByIdAndUpdate(element._id, element);
      if (!photo) {
        return console.log("Impossible de modifier cette image.");
      }
      console.log("L'image a été modifiée!");
      return photo;
    }
  } catch (error) {
    console.log(`C'est une erreur : ${error}.`);
    return error;
  }
}

module.exports = {
  obtenirPhotoParId,
  obtenirPhotosParCategorie,
  ajouterPhoto,
  modifierPhoto,
};
