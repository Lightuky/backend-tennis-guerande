import { ArticlesService } from "../services/Articles.js"

export const ArticlesController = {
    getArticlesLimiter: async (req, res, next) => {
        res.send((await ArticlesService.getArticles()).splice(0, 3));
    }
};
