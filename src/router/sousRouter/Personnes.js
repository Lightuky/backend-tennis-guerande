const express = require("express");
const mongoose = require("mongoose");

const personnesController = require("../../controller/Personnes");

let router = express.Router();

router.get("/adherents/nombre", async (req, res) => {
    res.send(personnesController.getNombresAdherents());
});

module.exports = router;
