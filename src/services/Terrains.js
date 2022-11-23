const Terrains = require("../db/schema/Terrains");

module.exports = {
    getNombreTerrains: async () => {
        return Terrains.countDocuments();
    }
};
