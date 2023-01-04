import express from "express";
import mongoose from "mongoose";

import { ArticlesController } from "../../controller/Articles.js"

export const ArticlesRouter = express.Router()
    .get("/limit", ArticlesController.getArticlesLimiter);

