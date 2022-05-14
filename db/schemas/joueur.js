const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let joueurSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    dateNaissance: {
      type: String,
      required: true,
    },
    sexe: {
      type: String,
      required: true,
    },
    classement: {
      type: String,
      required: true,
    },
    licenceNumero: {
      type: Number,
      required: true,
    },
    licenceNumero: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

joueurSchema.set("toJSON", { getters: true });

const Joueur = mongoose.model("Joueur", joueurSchema);

module.exports = Joueur;
