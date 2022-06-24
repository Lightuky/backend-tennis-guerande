const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let partenaireSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    logo: {
      type: mongoose.ObjectId,
      ref: "Image",
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

partenaireSchema.set("toJSON", { getters: true });

const Partenaire = mongoose.model("Partenaire", partenaireSchema);

module.exports = Partenaire;
