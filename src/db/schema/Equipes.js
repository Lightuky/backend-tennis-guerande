const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let equipesSchema = new Schema(
  {
    image: {
      type: mongoose.ObjectId,
      ref: "Photos",
      required: true,
    },
    joueur: [
      {
        type: mongoose.ObjectId,
        ref: "Joueurs",
        required: true,
      },
    ],
    sexe: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    championnat: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
    annee: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

equipesSchema.set("toJSON", { getters: true });

const Equipes = mongoose.model("Equipes", equipesSchema);

module.exports = Equipes;
