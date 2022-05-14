const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeSchema = new Schema(
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
    poste: {
      type: String,
      required: true,
    },
    dateEmbauche: {
      type: Date,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
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

employeSchema.set("toJSON", { getters: true });

const Employe = mongoose.model("Employe", employeSchema);

module.exports = Employe;
