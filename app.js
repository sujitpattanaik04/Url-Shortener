const urlRouter = require("./routes/urlRoute");
const Url = require("./models/urlModel");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
  const allUrls = await Url.find();
  res.render("home", { urls: allUrls });
});

app.use("/url", urlRouter);

module.exports = app;
