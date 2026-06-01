import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {

        const products = await Product.find().limit(50);

        res.status(200).json(products);

    } catch (error) {

        console.error("Get Products Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

export const addProduct = async (req, res) => {
    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {

        console.error("Add Product Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};