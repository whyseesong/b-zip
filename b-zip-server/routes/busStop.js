import express from "express";
import { getNearbyBusStop } from "../controllers/busStop";

const router = express.Router();

router.get("/nearby", getNearbyBusStop);

export default router;
