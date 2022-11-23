const Reseaux = require("../services/Reseaux");


module.exports = {
    getReseaux:  async (req, res, next) => {
        res.send({"nombre": await Reseaux.getReseaux()});

    }
};
