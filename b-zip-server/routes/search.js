import express from "express";
import { searchPlaces, testPlaces } from "../controllers/search";

const router = express.Router();

router.get("/places", searchPlaces);
router.get("/test", testPlaces);

module.exports = router;
