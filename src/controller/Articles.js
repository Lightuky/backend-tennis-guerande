const Articles = require("../services/Articles");


module.exports = {
    getArticlesLimiter: () => {
        return [{"name": "test 1"}, {"name": "test 2"}];
        // return Articles.getArticles().splice(0, 3);
    }
};
