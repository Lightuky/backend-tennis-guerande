const express = require("express");
const mongoose = require("mongoose");

const personnesController = require("../../controller/Personnes");

let router = express.Router();

router.get("/adherents/nombre", personnesController.getNombresAdherents);

module.exports = router;
