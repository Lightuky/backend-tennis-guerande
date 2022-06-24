const mongoose = require("mongoose");

const Partenaire = require("../db/schema/partenaire");

async function obtenirPartenaireParId(id) {
  try {
    const partenaire = await Partenaire.findById(id);
    console.log(partenaire);
    if (!partenaire) {
      return console.log("Aucun partenaire avec cet ID n'a été trouvé!");
    }
    return partenaire;
  } catch (error) {
    console.log(`C'est une erreur ${error}.`);
    return error;
  }
}

async function obtenirTousLesPartenaires() {
  try {
    const partenaires = await Partenaire.find({});
    console.log(partenaires);
    if (!partenaires) {
      console.log("Aucun partenaire n'a été trouvé!");
    }
    return partenaires;
  } catch (error) {
    console.log(`C'est une erreur : ${error}.`);
    return error;
  }
}

async function ajouterPartenaire(element) {
  try {
    const partenaire = new Partenaire({
      nom: element.nom,
      logo: element.logo,
      afficher: element.afficher,
    });
    console.log(partenaire);
    if (!partenaire) {
      return console.log("Impossible d'ajouter ce partenaire.");
    }
    await partenaire.save();
    console.log("Le partenaire a été ajouté!");
    return partenaire;
  } catch (error) {
    console.log(`C'est une erreur ${error}.`);
    return error;
  }
}

async function modifierPartenaire(element) {
  try {
    if (element._id) {
      const partenaire = await Partenaire.findByIdAndUpdate(
        element._id,
        element
      );
      if (!partenaire) {
        return console.log("Impossible de modifier ce partenaire.");
      }
      console.log("Le partenaire a été modifié!");
      return partenaire;
    }
  } catch (error) {
    console.log(`C'est une erreur ${error}.`);
    return error;
  }
}

module.exports = {
  obtenirPartenaireParId,
  obtenirTousLesPartenaires,
  ajouterPartenaire,
  modifierPartenaire,
};
