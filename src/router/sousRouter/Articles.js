import express from "express";

import {ArticlesController} from "../../controller/Articles.js"

export const ArticlesRouter = express.Router()
    .get("/", ArticlesController.getArticles)
    .get("/categories", ArticlesController.getArticlesCategories)
    .get("/details/:articleTitle", ArticlesController.getArticleDetails);
