import { Articles } from "../db/schema/Articles.js";

export const ArticlesService = {
    getArticles: () => {
        return Articles.find();
    }
};
