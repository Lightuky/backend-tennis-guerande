import {Albums} from "../db/schema/Albums.js";

export const AlbumsService = {
    getAlbums: (category) => {
        return Albums.getAlbums(category);
    },
    getAlbumsCategories: () => {
        return Albums.getAlbumsCategories();
    },
    getAlbumDetails: (albumName) => {
        return Albums.getAlbumDetails(albumName);
    }
};
