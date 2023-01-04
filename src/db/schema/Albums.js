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

AlbumsSchema.statics = {
    getAlbum: async () => {
      return await Albums.find().sort({"createdAt": -1}).exec()
        .then((album) => {
          if (!album) return undefined
          return album;
        })
        .catch((erreur) => {
          console.log(erreur);
          return undefined;
        });
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

