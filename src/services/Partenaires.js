import { Partenaires } from "../db/schema/partenaire.js";

export const PartenairesService = {
    getPartenaires: async () => {
        return Partenaires.find();
    }
};
