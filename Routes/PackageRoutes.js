import express from "express";
import { getTopSellingPackages } from "../Controlllers/PackageController.js";
const router = express.Router();

router.get("/package", getTopSellingPackages);

export default router;
