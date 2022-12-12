import { AlbumsService } from "../services/Albums.js"
import { PhotosService } from "../services/Photos.js"

export const AlbumsController = {
    getAlbums: async (req, res, next) => {
        res.send(await AlbumsService.getAlbums());
    },

    getPhotosByAlbum: async (req, res, next) => {
        let images = (await AlbumsService.getAlbumById(req.params.albums)).image

        let photos = []
        for(let i in images) {
            photos.push(await PhotosService.getPhotoById(images[i]));
        }

        res.send(photos);
    }
};
