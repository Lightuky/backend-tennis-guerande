import { Partenaires } from "../db/schema/Partenaires.js";

export const PartenairesService = {
    getPartenaires: async () => {
        return Partenaires.find();
    }
};
