const Personnes = require("../db/schema/Personnes");

module.exports = {
    getNombresAdherents: () => {
        return Personnes.countDocuments({"adherent": true});
    }
};
