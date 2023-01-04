import { Personnes } from "../db/schema/Personnes.js"

export const PersonnesService = {
    getNombresAdherents: () => {
        return Personnes.countDocuments({"adherent": true});
    }
};
