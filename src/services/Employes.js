const Employes = require("../db/schema/Employes");

module.exports = {
    getNombresEmployes: () => {
        return Employes.countDocuments();
    }
};
