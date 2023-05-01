import {ArticlesService} from "../services/Articles.js"

export const ArticlesController = {
    getArticles: async (req, res, next) => {
        res.send((await ArticlesService.getArticles(req.query.title, req.query.category, req.query.limit, req.query.age, req.query.seasonal)));
    },

    getArticlesCategories: async (req, res, next) => {
        res.send((await ArticlesService.getArticlesCategories()));
    },

    getArticleDetails: async (req, res, next) => {
        res.send((await ArticlesService.getArticleDetails(req.params.articleTitle)));
    },
};
