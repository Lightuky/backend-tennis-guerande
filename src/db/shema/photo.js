const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let photoSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
      default: "Aucune",
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

photoSchema.set("toJSON", { getters: true });

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
