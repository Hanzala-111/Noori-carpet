import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import customRoutes from "./routes/customRoutes.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

// connect MongoDB
connectDB();

const app = express();

/* =========================
   MIDDLEWARE
========================= */

// allow frontend access (Render + local dev)
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

// JSON body parser
app.use(express.json());

/* =========================
   API ROUTES
========================= */

app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/custom", customRoutes);

/* =========================
   HEALTH CHECK (for Render)
========================= */

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Noori Carpets API is running 🚀",
        status: "OK"
    });
});

/* =========================
   ERROR HANDLER
========================= */

app.use(errorHandler);

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

console.log("correct")