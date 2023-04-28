import express from "express";

import { AlbumsController } from "../../controller/Albums.js"

export const AlbumsRouter = express.Router()
    .get("/", AlbumsController.getAlbums)
    .get("/categories", AlbumsController.getAlbumsCategories)
    .get("/:albums/photos", AlbumsController.getPhotosByAlbum);
