const Articles = require("../services/Articles");


module.exports = {
    getArticlesLimiter: async (req, res, next) => {
        res.send((await Articles.getArticles()).splice(0, 3));
    }
};
