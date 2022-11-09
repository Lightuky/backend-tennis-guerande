import express from "express";

import router from "./src/router/index";
import { PORT } from "./config";

import db from "./src/db/connection";

const app = express();

app.use("/", router);

app.listen(PORT, () => {
  console.log(`L'application tourne sur le port ${PORT}.`);
});
