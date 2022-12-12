import { Photos } from "../db/schema/Photos.js";

export const PhotosService = {
    getPhotoById: (id) => {
        return Photos.findById(id);
    },
};
