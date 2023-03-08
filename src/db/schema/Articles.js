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
          required: true
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

articlesSchema.set("toJSON", { getters: true });

let findPicture = {$lookup: {from: "photos", localField: "image", foreignField: "_id", as: "image"}};
let findAuthor = {$lookup: {from: "employes", localField: "auteur", foreignField: "_id", as: "auteur"}};

articlesSchema.statics = {
    getArticles: async (limite) => {
        let pipeline = [
            findPicture,
            findAuthor,
            {$sort: {createdAt: -1}},
            {$limit: limite === undefined ? 3 : parseInt(limite)}
        ];
        return ApiService.get(Articles, pipeline);
    },

    getArticlesByCategorie: async (categorie, limite) => {
        let pipeline = [
            findPicture,
            findAuthor,
            {$match: {'categorie': categorie}},
            {$sort: {createdAt: -1}},
            {$limit: limite === undefined ? 6 : parseInt(limite)}
        ];
        return ApiService.get(Articles, pipeline)
    },
}

export const Articles = mongoose.model("Articles", articlesSchema);

