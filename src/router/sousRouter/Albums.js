import express from "express";
import mongoose from "mongoose";

import { AlbumsController } from "../../controller/Albums.js"

export const AlbumsRouter = express.Router()
    .get("/", AlbumsController.getAlbums)
    .get("/:albums/photos", AlbumsController.getPhotosByAlbum);