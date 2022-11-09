const express = require("express");
const mongoose = require("mongoose");

const reseauxController = require("../../controller/Reseaux");

let router = express.Router();

router.get("/", async (req, res) => {
    res.send(reseauxController.getReseaux());
});

module.exports = router;
