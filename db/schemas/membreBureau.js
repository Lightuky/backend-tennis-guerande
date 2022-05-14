const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let membreBureauSchema = new Schema(
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
      required: false,
    },
    role: {
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
  },
  {
    timestamps: true,
  }
);

membreBureauSchema.set("toJSON", { getters: true });

const membreBureau = mongoose.model("membreBureau", membreBureauSchema);

module.exports = membreBureau;
