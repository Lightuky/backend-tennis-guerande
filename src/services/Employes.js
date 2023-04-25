import {Employes} from "../db/schema/Employes.js"

export const EmployesService = {
    getNombresEmployes: () => {
        return Employes.getNombresEmployes();
    },

    getEmployesByPoste: (poste) => {
        return Employes.getEmployesByPoste(poste);
    },

    getDirigeants: () => {
        return Employes.getDirigeants();
    }
};
