import mongoose from "mongoose";
import {ApiService} from "../../services/Api.js";

const Schema = mongoose.Schema;

let articlesSchema = new Schema(
    {
        image: {
            type: mongoose.ObjectId,
            ref: "Photos",
            required: false
        },
        auteur: {
            type: mongoose.ObjectId,
            ref: "Employes",
            required: true
        },
        titre: {
            type: String,
            required: true,
            unique: true,
        },
        contenu: {
            type: String,
            required: true
        },
        categorie: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        afficher: {
            type: Boolean,
            required: true
        },
        favoris: {
            type: Boolean,
            required: true
        },
        saisonnier: {
            type: Boolean,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

articlesSchema.set("toJSON", {getters: true});

let findPicture = {$lookup: {from: "photos", localField: "image", foreignField: "_id", as: "image"}};
let findAuthor = {$lookup: {from: "employes", localField: "auteur", foreignField: "_id", as: "auteur"}};
let findPerson = {$lookup: {from: "personnes", localField: "auteur.personne", foreignField: "_id", as: "personne"}};

articlesSchema.statics = {
    getArticles: async (title, category, limit, age, seasonal) => {
        let pipeline = [];
        if (title) {
            let titleRegex = new RegExp(title, 'i');
            pipeline.push({$match: {titre: {$regex: titleRegex}}})
        }
        category ? pipeline.push({$match: {categorie: category}}) : null;
        limit ? pipeline.push({$limit: parseInt(limit)}) : null;
        if (age) {
            let today = new Date();
            let dateRanges = {
                week: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
                month: new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()),
                year: new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
            };
            pipeline.push({$match: {createdAt: {$gte: dateRanges[age]}}});
        }
        if (seasonal) {
            let seasonalBool = seasonal === 'true';
            pipeline.push({$match: {saisonnier: seasonalBool}})
        }
        pipeline.push(
            findPicture,
            findAuthor,
            {$sort: {createdAt: -1}}
        );
        return ApiService.get(Articles, pipeline);
    },

    getArticlesCategories: async () => {
      return ApiService.distinct(Articles, 'categorie');
    },

    getArticleDetails: async (articleTitle) => {
        let pipeline = [
            findPicture,
            findAuthor,
            findPerson,
            {$match: {'titre': articleTitle}}
        ];
        return ApiService.get(Articles, pipeline)
    },
}

export const Articles = mongoose.model("Articles", articlesSchema);

