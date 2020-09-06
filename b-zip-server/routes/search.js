const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "test for search" });
  next();
});

module.exports = router;
