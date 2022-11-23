const express = require("express");
const mongoose = require("mongoose");

const reseauxController = require("../../controller/Reseaux");

let router = express.Router();

router.get("/", reseauxController.getReseaux);

module.exports = router;
