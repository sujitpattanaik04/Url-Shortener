const shortid = require("shortid");
const Url = require("../models/urlModel");

async function generateShortUrl(req, res) {
  try {
    if (!req.body) {
      return res.status(400).json({
        status: "failed",
        message: "Url is required!",
      });
    }

    const shortId = shortid();

    await Url.create({
      shortId,
      redirectUrl: req.body.url,
      visitHistory: [],
    });

    res.status(200).json({ status: "success", shortId });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
}

async function redirectShortUrl(req, res) {
  try {
    const entry = await Url.findOneAndUpdate(
      {
        shortId: req.params.shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    console.log(entry);
    res.redirect(entry.redirectUrl);
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
}

module.exports = {
  generateShortUrl,
  redirectShortUrl,
};
