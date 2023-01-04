import express from "express";

import { HorairesController } from "../../controller/Horaires.js"

export const HorairesRouter = express.Router()
    .get("/:periode", HorairesController.getHoraireByPeriode)