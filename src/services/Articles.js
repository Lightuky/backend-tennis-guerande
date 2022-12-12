import { Articles } from "../db/schema/Articles.js";

export const ArticlesService = {
    getArticles: () => {
        return Articles.find().sort({"createdAt": -1});
    },

    getArticlesByCategorie: (categorie) => {
        return Articles.find({"categorie": categorie}).sort({"createdAt": -1});
    }
};
