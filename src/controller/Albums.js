import {AlbumsService} from "../services/Albums.js"
import {PhotosService} from "../services/Photos.js"

export const AlbumsController = {
    getAlbums: async (req, res, next) => {
        res.send(await AlbumsService.getAlbums(req.query.category));
    },

    getAlbumsCategories: async (req, res, next) => {
        res.send(await AlbumsService.getAlbumsCategories());
    },

    getPhotosByAlbum: async (req, res, next) => {
        let images = (await AlbumsService.getAlbumById(req.params.albums)).images
        let photos = []
        for (let i in images) {
            photos.push(await PhotosService.getPhotoById(images[i]));
        }
        res.send(photos);
    }
};
