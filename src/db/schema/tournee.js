import mongoose from "mongoose";

const Schema = mongoose.Schema;

let tourneeSchema = new Schema(
  {
    coach: [
      {
        type: mongoose.ObjectId,
        ref: "Employe",
        required: true,
      },
    ],
    prix: {
      type: String,
      required: true,
    },
    date: {
      debut: {
        type: Date,
        required: true,
      },
      fin: {
        type: Date,
        required: true,
      },
    },
    programme: [
      {
        type: String,
        required: false,
      },
    ],
    organisation: {
      type: String,
      required: true,
    },
    autre: {
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

tourneeSchema.set("toJSON", { getters: true });

const Tournee = mongoose.model("Tournee", tourneeSchema);

module.exports = Tournee;
