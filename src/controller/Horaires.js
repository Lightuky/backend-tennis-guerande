import { HorairesService } from "../services/Horaires.js"

export const HorairesController = {
    getHoraireByPeriode: async (req, res, next) => {
        res.send(await HorairesService.getHoraireByPeriode(req.params.periode))
    }
};
