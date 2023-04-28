import mongoose from "mongoose";
import {ApiService} from "../../services/Api.js";

const Schema = mongoose.Schema;

let AlbumsSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
            unique: true,
        },
        images: [
            {
                type: mongoose.ObjectId,
                ref: "Photos",
                required: true,
            },
        ],
        categorie: {
            type: String,
            required: true,
        },
        annee: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

AlbumsSchema.set("toJSON", {getters: true});

AlbumsSchema.statics = {
    getAlbums: async (category) => {
        let pipeline = [];
        if (category) {
            pipeline.push({$match: {categorie: category}});
        }
        pipeline.push(
            {$sort: {createdAt: -1}},
            {$addFields: {images: {$size: "$images"}}}
        );
        return ApiService.get(Albums, pipeline);
    },

    getAlbumsCategories: async () => {
        return ApiService.distinct(Albums, 'categorie');
    },

    getAlbumById: async (id) => {
        return await Albums.findById(id).lean().exec()
            .then((album) => {
                if (!album) return undefined
                return album;
            })
            .catch((erreur) => {
                console.log(erreur);
                return undefined;
            });
    },
}

export const Albums = mongoose.model("Albums", AlbumsSchema);

