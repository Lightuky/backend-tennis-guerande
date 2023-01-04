import express from "express";
import mongoose from "mongoose";

import { TerrainsController } from "../../controller/Terrains.js"

export const TerrainRouter = express.Router()
    .get("/nombre", TerrainsController.getNombreTerrains);
