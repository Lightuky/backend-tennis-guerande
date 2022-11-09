const Terrains = require("../db/schema/Terrains");

module.exports = {
    getNombreTerrains: () => {
        return Terrains.countDocuments();
    }
};
