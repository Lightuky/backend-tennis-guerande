import mongoose from "mongoose";

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
        return await Articles.aggregate([findPicture, findAuthor])
            .sort({"createdAt": -1})
            .limit(limite === undefined ? 3 : parseInt(limite))
            .exec()
            .then((articles) => {
                if (!articles) return undefined
                return articles;
            })
            .catch((erreur) => {
                console.log(erreur);
                return undefined;
            });
    },

    getArticlesByCategorie: async (categorie, limite) => {
        return await Articles.aggregate([{$match: {'categorie': categorie}}, findPicture, findAuthor])
            .sort({"createdAt": -1})
            .limit(limite === undefined ? 6 : parseInt(limite))
            .exec()
            .then((articles) => {
                if (!articles) return undefined
                return articles;
            })
            .catch((erreur) => {
                console.log(erreur);
                return undefined;
            });
    },
}

export const Articles = mongoose.model("Articles", articlesSchema);

