import express from "express";

import { router } from "./src/router/index.js";
import { config } from "./config.js";

import { connection as db } from "./src/db/connection.js";

const app = express();

app.use("/", router);

app.listen(config.PORT, () => {
  console.log(`L'application tourne sur le port ${config.PORT}.`);
});
