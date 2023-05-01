import {AlbumsService} from "../services/Albums.js"

export const AlbumsController = {
    getAlbums: async (req, res, next) => {
        res.send(await AlbumsService.getAlbums(req.query.category));
    },

    getAlbumsCategories: async (req, res, next) => {
        res.send(await AlbumsService.getAlbumsCategories());
    },

    getAlbumDetails: async (req, res, next) => {
        res.send(await AlbumsService.getAlbumDetails(req.params.albumName));
    }
};
