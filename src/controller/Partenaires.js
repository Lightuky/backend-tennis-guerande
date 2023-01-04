import { PartenairesService } from "../services/Partenaires.js";

export const PartenairesController = {
    getPartenaires: async (req, res, next) => {
        res.send(await PartenairesService.getPartenaires())
    }
};
