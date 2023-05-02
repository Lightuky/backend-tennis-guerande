import express, {json} from "express";
import cors from "cors";

import {router} from "./src/router/index.js";
import {config} from "./config.js";

import {connection as db} from "./src/db/connection.js";

const app = express();
app.use(cors({origin: "*"}));
app.use("/", router);

app.use(json())

app.listen(config.PORT, () => {
    console.log(`L'application tourne sur le port ${config.PORT}.`);
});
