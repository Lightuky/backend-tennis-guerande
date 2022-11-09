const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let terrainsSchema = new Schema(
    {
        reserverPar: {
            type: mongoose.ObjectId,
            ref: "Joueur",
            required: true
        },
        matricule: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true,
    }
);

terrainsSchema.set("toJSON", { getters: true });

const Terrains = mongoose.model("Terrains", terrainsSchema);

module.exports = Terrains;
