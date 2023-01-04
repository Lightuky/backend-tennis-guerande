import express from "express";
import mongoose from "mongoose";

import { EmployesController } from "../../controller/Employes.js";

export const EmployesRouter = express.Router()
    .get("/nombre", EmployesController.getNombresEmployes);
