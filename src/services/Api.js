export const ApiService = {
    get: async (resource, pipeline) => {
        return await resource.aggregate(pipeline)
            .exec()
            .then((data) => {
                if (!data) return undefined
                return data;
            })
            .catch((erreur) => {
                console.log(erreur);
                return undefined;
            });
    },

    count: async (resource, pipeline) => {
        return await resource.countDocuments(pipeline)
            .exec()
            .then((data) => {
                if (!data) return undefined
                return data;
            })
            .catch((erreur) => {
                console.log(erreur);
                return undefined;
            });
    },

    distinct: async (resource, pipeline) => {
        return await resource.distinct(pipeline)
            .exec()
            .then((data) => {
                if (!data) return undefined
                return data;
            })
            .catch((erreur) => {
                console.log(erreur);
                return undefined;
            });
    },
};
