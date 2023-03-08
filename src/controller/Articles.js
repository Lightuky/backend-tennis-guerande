import { ArticlesService } from "../services/Articles.js"

export const ArticlesController = {
    getArticlesLimiter: async (req, res, next) => {
        res.send((await ArticlesService.getArticles(req.params.limite)));
    },

    getArticlesByCategorie: async (req, res, next) => {
        res.send((await ArticlesService.getArticlesByCategorie(req.params.categorie)));
    },

    getArticlesLimiterByCategorie: async (req, res, next) => {
        res.send((await ArticlesService.getArticlesByCategorie(req.params.categorie, req.params.limite)));
    }
};
