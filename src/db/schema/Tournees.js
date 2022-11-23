import mongoose from "mongoose";

const Schema = mongoose.Schema;

let tourneesSchema = new Schema(
  {
    coach: [
      {
        type: mongoose.ObjectId,
        ref: "Employes",
        required: true,
      },
    ],
    prix: {
      type: Number,
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

tourneesSchema.set("toJSON", { getters: true });

export const Tournees = mongoose.model("Tournees", tourneesSchema);
