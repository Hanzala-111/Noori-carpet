import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);