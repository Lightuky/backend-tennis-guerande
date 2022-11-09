const Articles = require("../db/schema/Articles");

module.exports = {
    getArticles: () => {
        return Articles.find();
    }
};
