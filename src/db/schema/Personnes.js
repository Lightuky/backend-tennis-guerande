import mongoose from "mongoose";

const Schema = mongoose.Schema;

let personnesSchema = new Schema(
    {
        image: {
            type: mongoose.ObjectId,
            ref: "Photos",
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: true
        },
        dateNaissance: {
            type: Date,
            required: true
        },
        sexe: {
            type: String,
            required: true
        },
        adherent: {
            type: Boolean,
            required: true,
            default: false
        },
        licenceNumber: {
            type: Number,
            required: false
        },
        licenceLette: {
            type: String,
            required: false
        },
        telephone: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        club: {
            type: String,
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

personnesSchema.set("toJSON", { getters: true });

personnesSchema.statics = {
    getNombresAdherents: async () => {
      return await Personnes.countDocuments({"adherent": true}).exec()
        .then((adherents) => {
          if (!adherents) return undefined
          return adherents;
        })
        .catch((erreur) => {
          console.log(erreur);
          return undefined;
        });
    },
}


export const Personnes = mongoose.model("Personnes", personnesSchema);
