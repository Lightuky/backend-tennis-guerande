const Reseaux = require("../db/schema/Reseaux");

module.exports = {
    getReseaux: () => {
        return Reseaux.find();
    }
};