const mongoose = require("mongoose");

const config = require("../config");

mongoose.connect(config.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connection = mongoose.connection;

connection.on("error", () => {
  console.error.bind(console, "Erreur lors de la connexion!");
});

connection.once("open", () => {
  console.log("Connexion à la base réussie.");
});

module.exports = connection;
