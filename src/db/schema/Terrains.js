import mongoose from "mongoose";

const Schema = mongoose.Schema;

let terrainsSchema = new Schema(
    {
        reserverPar: {
            type: mongoose.ObjectId,
            ref: "Joueur",
            required: true
        },
        matricule: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true,
    }
);

terrainsSchema.set("toJSON", { getters: true });

terrainsSchema.statics = {
    getNombreTerrains: async () => {
      return await Terrains.countDocuments().exec()
        .then((terrains) => {
          if (!terrains) return undefined
          return terrains;
        })
        .catch((erreur) => {
          console.log(erreur);
          return undefined;
        });
    },
}

export const Terrains = mongoose.model("Terrains", terrainsSchema);
