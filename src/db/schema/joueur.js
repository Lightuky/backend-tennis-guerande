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
    image: {
      type: mongoose.ObjectId,
      ref: "Image",
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
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    club: {
      type: String,
      required: true,
    },
    equipes: [
      {
        type: mongoose.ObjectId,
        ref: "Equipe",
        required: false,
      },
    ],
    role: {
      type: String,
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

joueurSchema.set("toJSON", { getters: true });

const Joueur = mongoose.model("Joueur", joueurSchema);

module.exports = Joueur;
