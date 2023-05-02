import express from "express";

import {PhotosRouter} from "./Photos.js";
import {PartenairesRouter} from "./Partenaires.js";
import {PersonnesRouter} from "./Personnes.js";
import {EmployesRouter} from "./Employes.js";
import {TerrainRouter} from "./Terrains.js";
import {ArticlesRouter} from "./Articles.js";
import {ReseauxRouter} from "./Reseaux.js";
import {AlbumsRouter} from "./Albums.js";
import {HorairesRouter} from "./Horaires.js";

export const apiRouter = express.Router()

    .get("/", (req, res) => {
        res.send("Api");
    })

    .use("/photos", PhotosRouter)
    .use("/partenaires", PartenairesRouter)
    .use("/personnes", PersonnesRouter)
    .use("/employes", EmployesRouter)
    .use("/terrains", TerrainRouter)
    .use("/articles", ArticlesRouter)
    .use("/reseaux", ReseauxRouter)
    .use("/albums", AlbumsRouter)
    .use("/horaires", HorairesRouter);
