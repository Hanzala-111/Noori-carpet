import express from "express";
import { sendCustomRequest } from "../controllers/customControllers.js";

const router = express.Router();

router.post("/", sendCustomRequest);

export default router;