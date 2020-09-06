const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "test for connect" });
  next();
});

module.exports = router;
