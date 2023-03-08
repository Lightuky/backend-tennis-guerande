import { Articles } from "../db/schema/Articles.js";

export const ArticlesService = {
    getArticles: (limite) => {
        return Articles.getArticles(limite);
    },

    getArticlesByCategorie: (categorie, limite) => {
        return Articles.getArticlesByCategorie(categorie, limite);
    }
};
