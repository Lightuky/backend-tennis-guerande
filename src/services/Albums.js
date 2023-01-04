import { Albums } from "../db/schema/Albums.js";

export const AlbumsService = {
    getAlbums: () => {
        return Albums.getAlbum();
    },
    getAlbumById: (id) => {
        return Albums.findById(id).lean();
    }
};
