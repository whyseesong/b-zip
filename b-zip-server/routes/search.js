import express from "express";
import { searchPlaces, searchSubways, searchAll } from "../controllers/search";

const router = express.Router();

router.get("/places", searchPlaces);
router.get("/subways", searchSubways);
router.get("/all", searchAll);

export default router;
