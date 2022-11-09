const express = require("express");
const mongoose = require("mongoose");

const terrainsController = require("../../controller/Terrains");

let router = express.Router();

router.get("/nombre", async (req, res) => {
    res.send(terrainsController.getNombreTerrains());
});

module.exports = router;
