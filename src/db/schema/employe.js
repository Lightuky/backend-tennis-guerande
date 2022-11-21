import mongoose from "mongoose";

const Schema = mongoose.Schema;

let employeSchema = new Schema(
  {
    informationsPerso: {
      type: mongoose.ObjectId,
      ref: "Joueur",
      required: true,
    },
    poste: {
      type: String,
      required: true,
    },
    dateEmbauche: {
      type: Date,
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

employeSchema.set("toJSON", { getters: true });

export const Employe = mongoose.model("Employe", employeSchema);
