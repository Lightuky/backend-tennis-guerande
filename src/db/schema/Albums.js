import mongoose from "mongoose";

const Schema = mongoose.Schema;

let AlbumsSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        image: [
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

AlbumsSchema.set("toJSON", { getters: true });

export const Albums = mongoose.model("Albums", AlbumsSchema);

