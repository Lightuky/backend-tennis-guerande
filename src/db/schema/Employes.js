import mongoose from "mongoose";

const Schema = mongoose.Schema;

let employesSchema = new Schema(
  {
      personne: {
          type: mongoose.ObjectId,
          ref: "Personnes"
      },
      poste: {
          type: String,
          required: true
      },
      dateEmbauche: {
          type: Date,
          required: true
      },
      afficher: {
          type: Boolean,
          required: true
      }
  },
  {
    timestamps: true,
  }
);

employesSchema.set("toJSON", { getters: true });

export const Employes = mongoose.model("Employes", employesSchema);