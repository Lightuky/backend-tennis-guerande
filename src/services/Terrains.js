import { Terrains } from "../db/schema/Terrains.js"

export const TerrainsService = {
    getNombreTerrains: async () => {
        return Terrains.getNombreTerrains();
    }
};
