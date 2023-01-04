import { Albums } from "../db/schema/Albums.js";

export const AlbumsService = {
    getAlbums: () => {
        return Albums.find().sort({"createdAt": -1});
    },
    getAlbumById: (id) => {
        return Albums.findById(id).lean();
    }
};
