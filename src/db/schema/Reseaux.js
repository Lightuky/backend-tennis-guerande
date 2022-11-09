const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let reseauxSchema = new Schema(
    {
        logo: {
            type: mongoose.ObjectId,
            ref: "Photos",
            required: true
        },
        nom: {
            type: String,
            required: true
        },
        lien: {
            type: String,
            required: true
        },
        afficher: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

reseauxSchema.set("toJSON", { getters: true });

const Reseaux = mongoose.model("Reseaux", reseauxSchema);

module.exports = Reseaux;
