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
};
