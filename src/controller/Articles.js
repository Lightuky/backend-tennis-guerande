import { ArticlesService } from "../services/Articles.js"

export const ArticlesController = {
    getArticlesLimiter: async (req, res, next) => {
        res.send((await ArticlesService.getArticles()).splice(0, 3));
    },

    getArticlesByCategorie: async (req, res, next) => {
        res.send((await ArticlesService.getArticlesByCategorie(req.params.categorie)));
    },

    getArticlesLimiterByCategorie: async (req, res, next) => {
        res.send((await ArticlesService.getArticlesByCategorie(req.params.categorie)).splice(0, 6));
    }
};
