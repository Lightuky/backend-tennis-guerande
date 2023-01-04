const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let joueursSchema = new Schema(
  {
    image: {
      type: mongoose.ObjectId,
      ref: "Photos",
      required: true,
    },    
    personne: {
      type: mongoose.ObjectId,
      ref: "Personnes",
      required: true,
    },
    classement: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
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

const Joueurs = mongoose.model("Joueurs", joueursSchema);

module.exports = Joueurs;
