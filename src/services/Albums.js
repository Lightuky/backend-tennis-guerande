import { Albums } from "../db/schema/Albums.js";

export const AlbumsService = {
    getAlbums: () => {
        return Albums.getAlbums();
    },
    getAlbumById: (id) => {
        return Albums.getAlbumById(id);
    }
};
