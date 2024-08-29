const express = require("express");
const {
  generateShortUrl,
  redirectShortUrl,
  getAnalytics,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", generateShortUrl);
router.get("/:shortId", redirectShortUrl);
router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
