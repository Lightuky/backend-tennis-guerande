const Terrains = require("../services/Terrains");


module.exports = {
    getNombreTerrains: async (req, res, next) => {
        res.send({nombre: await Terrains.getNombreTerrains()});
    }
};
