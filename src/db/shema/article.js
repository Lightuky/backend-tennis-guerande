const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    image: {
      type: mongoose.ObjectId,
      ref: "Image",
      required: false,
    },
    contenu: {
      type: String,
      required: true,
    },
    auteur: {
      type: mongoose.ObjectId,
      ref: "Joueur",
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    afficher: {
      type: Boolean,
      required: true,
    },
    favori: {
      type: Boolean,
      required: true,
    },
    saisonnier: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

articleSchema.set("toJSON", { getters: true });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
