const Personnes = require("../db/schema/Personnes");

module.exports = {
    getNombresAdherents: () => {
        return Personnes.countDocuments({"_id": {"adherent": true}});
    }
};
