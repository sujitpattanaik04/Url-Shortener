const express = require("express");
const urlRouter = require("./routes/urlRoute");
const Url = require("./models/urlModel");

const app = express();

app.use(express.json());

app.use("/url", urlRouter);

app.get("/:shortId", async (req, res) => {
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
});

module.exports = app;
