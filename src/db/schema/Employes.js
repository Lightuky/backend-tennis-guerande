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
            findPerson,
            findPicture,
            {$project: {poste: 1, 'profile.nom': 1, 'profile.prenom': 1, 'picture.base_64': 1}},
            {$match: {poste: {$in: ['secrétaire', 'président', 'présidente', 'comptable', "conseil d'administration"]}}}
        ];
        let results = await ApiService.get(Employes, pipeline);
        const board_of_directors = results.filter(obj => obj.poste === "conseil d'administration");
        const others = results.filter(obj => obj.poste !== "conseil d'administration");
        return [others, board_of_directors];
    },
}

export const Employes = mongoose.model("Employes", employesSchema);
