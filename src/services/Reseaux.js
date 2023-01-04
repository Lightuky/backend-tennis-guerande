import { Reseaux } from "../db/schema/Reseaux.js"

export const ReseauxService = {
    getReseaux: () => {
        return Reseaux.getReseaux();
    }
};