import { ReseauxService } from "../services/Reseaux.js"

export const ReseauxController = {
    getReseaux:  async (req, res, next) => {
        res.send(await ReseauxService.getReseaux());

    }
};
