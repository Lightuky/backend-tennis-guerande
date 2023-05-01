import {Articles} from "../db/schema/Articles.js";

export const ArticlesService = {
    getArticles: (title, category, limit, age, seasonal) => {
        return Articles.getArticles(title, category, limit, age, seasonal);
    },

    getArticlesCategories: () => {
        return Articles.getArticlesCategories();
    },

    getArticleDetails: (articleTitle) => {
        return Articles.getArticleDetails(articleTitle);
    }
};
