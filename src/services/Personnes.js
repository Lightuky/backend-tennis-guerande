import { Personnes } from "../db/schema/Personnes.js"

export const PersonnesService = {
    getNombresAdherents: () => {
        return Personnes.getNombresAdherents();
    },

    getAdherentsByPoste: (poste) => {
        return Personnes.getAdherentsByPoste(poste);
    }
};
