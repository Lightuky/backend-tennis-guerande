const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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
  },
  {
    timestamps: true,
  }
);

articleSchema.set("toJSON", { getters: true });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
