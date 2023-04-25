import express from "express";

import { PersonnesController } from "../../controller/Personnes.js"

export const PersonnesRouter = express.Router()
    .get("/adherents/nombre", PersonnesController.getNombresAdherents);
