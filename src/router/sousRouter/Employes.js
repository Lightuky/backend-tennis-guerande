const express = require("express");
const mongoose = require("mongoose");

const employesController = require("../../controller/Employes");

let router = express.Router();

router.get("/nombre", async (req, res) => {
    res.send(employesController.getNombresEmployes());
});

module.exports = router;
