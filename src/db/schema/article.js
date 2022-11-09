import mongoose from "mongoose";

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
      type: String,
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
    possedeImage: {
      type: Boolean,
      required: true,
    },
    favori: {
      type: Boolean,
      required: true,
    },
    occasionel: {
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
