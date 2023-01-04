import mongoose from "mongoose";

const Schema = mongoose.Schema;

let horairesSchema = new Schema(
    {
        jour: {
            type: String,
            required: true,
        },
        demi_jour: {
            type: String,
            required: true,
        },
        ouverture: {
            type: String,
            required: false,
        },
        fermture: {
            type: String,
            required: true,
        },
        periode: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


horairesSchema.set("toJSON", { getters: true });

export const Horaires = mongoose.model("Horaires", horairesSchema);