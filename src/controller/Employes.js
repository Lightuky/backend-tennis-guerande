const Employes = require("../services/Employes");


module.exports = {
    getNombresEmployes: async (req, res, next) => {
        res.send({"nombre": await Employes.getNombresEmployes()});
    }
};
