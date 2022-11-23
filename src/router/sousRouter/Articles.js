const express = require("express");
const mongoose = require("mongoose");

const articlesController = require("../../controller/Articles");

let router = express.Router();

router.get("/limit", articlesController.getArticlesLimiter);

module.exports = router;
