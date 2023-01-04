import { TerrainsService } from "../services/Terrains.js"

export const TerrainsController = {
    getNombreTerrains: async (req, res, next) => {
        res.send({nombre: await TerrainsService.getNombreTerrains()});
    }
};
