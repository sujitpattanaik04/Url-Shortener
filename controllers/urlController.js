const shortid = require("shortid");
const Url = require("../models/urlModel");

async function generateShortUrl(req, res) {
  console.log(req.body);
  if (!req.body) {
    return res.status(400).json({
      status: "failed",
      message: "Url is required!",
    });
  }

  const shortId = shortid();

  Url.create({
    shortId,
    redirectUrl: req.body.url,
    visitHistory: [],
  });

  res.status(200).json({ status: "success", shortId });
}

module.exports = {
  generateShortUrl,
};
