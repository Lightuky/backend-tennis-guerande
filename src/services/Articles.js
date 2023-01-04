import { Articles } from "../db/schema/Articles.js";

export const ArticlesService = {
    getArticles: () => {
        return Articles.getArticles();
    },

    getArticlesByCategorie: (categorie) => {
        return Articles.getArticlesByCategorie(categorie);
    }
};
