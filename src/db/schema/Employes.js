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

employesSchema.statics = {
    getNombresEmployes: async () => {
      return await Employes.countDocuments().exec()
        .then((nb) => {
          if (!nb) return undefined
          return nb;
        })
        .catch((erreur) => {
          console.log(erreur);
          return undefined;
        });
    },

    getSecretaire: async () => {
        return await Employes.find({poste: "secretaire"}).exec()
        .then((secretaires) => {
            if (!secretaires) return undefined
            return secretaires;
        })
        .catch((erreur) => {
            console.log(erreur);
            return undefined;
        });
    },
}

export const Employes = mongoose.model("Employes", employesSchema);