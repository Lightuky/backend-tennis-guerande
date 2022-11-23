const express = require("express");
    const mongoose = require("mongoose");

const terrainsController = require("../../controller/Terrains");

let router = express.Router();

router.get("/nombre", terrainsController.getNombreTerrains);

module.exports = router;
