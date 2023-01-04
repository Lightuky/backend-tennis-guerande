import express from "express";

import navbar from "../../api/navbar.json" assert { type: "json" }
import { PhotosRouter } from "./Photos.js";
import { PartenairesRouter } from "./Partenaires.js";
import { PersonnesRouter } from "./Personnes.js";
import { EmployesRouter } from "./Employes.js";
import { TerrainRouter } from "./Terrains.js";
import { ArticlesRouter } from "./Articles.js";
import { ReseauxRouter } from "./Reseaux.js";
import { AlbumsRouter } from "./Albums.js";
import { HorairesRouter } from "./Horaires.js";

export const apiRouter = express.Router()

.get("/", (req, res) => {
  res.send("Api");
})

.get("/navbar", (req, res) => {
  res.status(200).json(navbar);
})

.use("/photos", PhotosRouter)
.use("/partenaire", PartenairesRouter)
.use("/personnes", PersonnesRouter)
.use("/employes", EmployesRouter)
.use("/terrains", TerrainRouter)
.use("/articles", ArticlesRouter)
.use("/reseaux", ReseauxRouter)
.use("/albums", AlbumsRouter)
.use("/horaires", HorairesRouter);
