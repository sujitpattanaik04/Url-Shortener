const express = require("express");
const { generateShortUrl } = require("../controllers/urlController");


const router = express.Router();

router.post("/", generateShortUrl);

module.exports = router;
