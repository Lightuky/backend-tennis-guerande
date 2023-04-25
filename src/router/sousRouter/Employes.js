import express from "express";

import { EmployesController } from "../../controller/Employes.js";

export const EmployesRouter = express.Router()
    .get("/nombre", EmployesController.getNombresEmployes)
    .get("/poste/:poste", EmployesController.getEmployesByPoste)
    .get("/dirigeants", EmployesController.getDirigeants);
