const Reseaux = require("../services/Reseaux");


module.exports = {
    getReseaux: () => {
        return [{nom: "Google", lien: "https://google.com"}, {nom: "Youtube", lien: "https://Youtube.com"}];
        // return {"nombre": Reseaux.getReseaux()};

    }
};
