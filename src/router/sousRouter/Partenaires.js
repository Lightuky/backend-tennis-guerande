import express from "express";

import { PartenairesController } from "../../controller/Partenaires.js";

export const PartenairesRouter = express.Router()
    .get("/", PartenairesController.getPartenaires);
