import { PersonnesService } from "../services/Personnes.js"

export const PersonnesController = {
    getNombresAdherents: async (req, res, next) => {
        res.send({"nombre": await  PersonnesService.getNombresAdherents()});
    },

    getAdherentsByPoste: async (req, res, next) => {
        res.send((await PersonnesService.getAdherentsByPoste(req.params.poste)));
    }
};
