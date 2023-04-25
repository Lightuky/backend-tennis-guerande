import mongoose from "mongoose";
import {ApiService} from "../../services/Api.js";

const Schema = mongoose.Schema;

let partenairesSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    logo: {
      type: mongoose.ObjectId,
      ref: "Photos",
      required: true,
    },
    afficher: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

partenairesSchema.method({
  masquer: function () {
    this.afficher = !this.afficher;
  },
});

let findPicture = {$lookup: {from: "photos", localField: "logo", foreignField: "_id", as: "logo"}};

partenairesSchema.static({
  ajouterPartenaire: async function (nouveau) {
    try {
      const partenaire = new Partenaire({
        nom: nouveau.nom,
        logo: nouveau.logo,
        afficher: nouveau.afficher,
      });
      if (!partenaire) {
        return console.log("Impossible d'ajouter ce partenaire.");
      }
      await partenaire.save();
      console.log("Le partenaire a été ajouté!");
    } catch (error) {
      console.log(`C'est une erreur ${error}.`);
      return error;
    }
  },

  obtenirPartenaireParId: async function (id) {
    try {
      const partenaire = await this.findById(id);
      if (!partenaire) {
        return console.log("Aucun partenaire avec cet ID n'a été trouvé!");
      }
      return partenaire;
    } catch (error) {
      console.log(`C'est une erreur ${error}.`);
      return error;
    }
  },

  obtenirTousLesPartenaires: async function () {
    let pipeline = [
      findPicture,
      {$match: {'afficher': true}}
    ];
    return ApiService.get(Partenaires, pipeline);
  },

  modifierPartenaire: async function (element) {
    try {
      if (element._id) {
        const partenaire = await this.findByIdAndUpdate(element._id, element);
        if (!partenaire) {
          return console.log("Impossible de modifier ce partenaire.");
        }
        console.log("Le partenaire a été modifié!");
      }
    } catch (error) {
      console.log(`C'est une erreur ${error}.`);
      return error;
    }
  },

  masquerPartenaire: async function (id) {
    try {
      let partenaire = await this.obtenirPartenaireParId(id);
      partenaire.masquer();
      await this.modifierPartenaire(partenaire);
      console.log(
        partenaire.afficher
          ? "Le partenaire est affichable"
          : "Le partenaire n'est plus affichable"
      );
    } catch (error) {
      console.log(`C'est une erreur : ${error}.`);
    }
  },
});

partenairesSchema.set("toJSON", { getters: true });

export const Partenaires = mongoose.model("Partenaires", partenairesSchema);

