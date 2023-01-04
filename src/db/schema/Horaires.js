import mongoose from "mongoose";

const Schema = mongoose.Schema;

let horairesSchema = new Schema(
    {
        jour: {
            type: String,
            required: true,
        },
        demi_jour: {
            type: String,
            required: true,
        },
        ouverture: {
            type: String,
            required: false,
        },
        fermture: {
            type: String,
            required: true,
        },
        periode: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


horairesSchema.set("toJSON", { getters: true });

horairesSchema.statics = {
    getHoraireByPeriode: async (periode) => {
      return await Horaires.find({"periode": periode}).exec()
        .then((horaires) => {
          if (!horaires) return undefined
          return horaires;
        })
        .catch((erreur) => {
          console.log(erreur);
          return undefined;
        });
    },
}

export const Horaires = mongoose.model("Horaires", horairesSchema);