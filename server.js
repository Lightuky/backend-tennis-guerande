const express = require("express");

const router = require("./router/index");
const config = require("./config");

//const db = require("./db/connection");

const app = express();

app.use("/", router);

app.listen(config.PORT, () => {
  console.log(`L'application tourne sur le port ${config.PORT}.`);
});
