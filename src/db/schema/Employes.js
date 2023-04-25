import mongoose from "mongoose";
import {ApiService} from "../../services/Api.js";

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

employesSchema.set("toJSON", {getters: true});

let findPerson = {$lookup: {from: "personnes", localField: "personne", foreignField: "_id", as: "profile"}};
let findPicture = {$lookup: {from: "photos", localField: "profile.image", foreignField: "_id", as: "picture"}};

employesSchema.statics = {
    getNombresEmployes: async () => {
        return ApiService.count(Employes, {});
    },

    getEmployesByPoste: async (poste) => {
        let pipeline = [
            findPerson,
            findPicture,
            {$match: {'poste': poste}}
        ];
        return ApiService.get(Employes, pipeline);
    },

    getDirigeants: async () => {
        let pipeline = [
            {$match: {poste: {$in: ['secrétaire', 'président', 'présidente', 'comptable']}}}
        ];
        return ApiService.get(Employes, pipeline)
    },
}

export const Employes = mongoose.model("Employes", employesSchema);
