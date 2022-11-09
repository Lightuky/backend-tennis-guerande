const Terrains = require("../services/Terrains");


module.exports = {
    getNombreTerrains: () => {
        return {"nombre": 3};
        // return {"nombre": Terrains.getNombreTerrains()};

    }
};
