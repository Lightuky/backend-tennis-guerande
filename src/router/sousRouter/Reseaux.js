import express from "express";
import mongoose from "mongoose";

import { ReseauxController } from "../../controller/Reseaux.js";

export const ReseauxRouter = express.Router()
    .get("/", ReseauxController.getReseaux);