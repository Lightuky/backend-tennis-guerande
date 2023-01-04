import { Horaires } from "../db/schema/Horaires.js";

export const HorairesService = {
    getHoraireByPeriode: (periode) => {
        return Horaires.getHoraireByPeriode(periode);
    }
};
