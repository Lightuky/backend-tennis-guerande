const Employes = require("../services/Employes");


module.exports = {
    getNombresEmployes: () => {
        return {"nombre": 2};
        // return {"nombre": Employes.getNombresEmployes()};

    }
};
