import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import customRoutes from "./routes/customRoutes.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

// Connect MongoDB
connectDB();

const app = express();

// For ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =========================
   MIDDLEWARE
========================= */

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

/* =========================
   API ROUTES
========================= */

app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/custom", customRoutes);

/* =========================
   FRONTEND FILES
========================= */

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
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

console.log("correct");