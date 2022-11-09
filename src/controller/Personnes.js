const Personnes = require("../services/Personnes");


module.exports = {
    getNombresAdherents: () => {
        return {"nombre": 1};
        // return {"nombre": Personnes.getNombresAdherents()};

    }
};
