import {EmployesService} from "../services/Employes.js"

export const EmployesController = {
    getNombresEmployes: async (req, res, next) => {
        res.send({"nombre": await EmployesService.getNombresEmployes()});
    },

    getEmployesByPoste: async (req, res, next) => {
        res.send((await EmployesService.getEmployesByPoste(req.params.poste)));
    },

    getDirigeants: async (req, res, next) => {
        res.send((await EmployesService.getDirigeants()));
    }
};
