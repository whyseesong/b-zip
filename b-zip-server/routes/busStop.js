import express from "express";
import { index } from "../controllers/busStop";

const router = express.Router();

router.get("/", index);

module.exports = router;
