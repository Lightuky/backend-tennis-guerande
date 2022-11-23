const Personnes = require("../services/Personnes");


module.exports = {
    getNombresAdherents: async (req, res, next) => {
        res.send({"nombre": await  Personnes.getNombresAdherents()});
    }
};
