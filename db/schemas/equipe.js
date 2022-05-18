const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let equipeSchema = new Schema(
  {
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
    joueurs: [
      {
        type: mongoose.ObjectId,
        ref: "Joueur",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

equipeSchema.set("toJSON", { getters: true });

const Equipe = mongoose.model("Equipe", equipeSchema);

module.exports = Equipe;
