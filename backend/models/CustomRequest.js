import mongoose from "mongoose";

const customSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        size: {
            type: String,
            required: true,
            trim: true
        },
        design: {
            type: String,
            required: true,
            trim: true
        },
        message: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("CustomRequest", customSchema);