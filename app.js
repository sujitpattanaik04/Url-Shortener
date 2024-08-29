const express = require("express");
const urlRouter = require("./routes/urlRoute");
const Url = require("./models/urlModel");

const app = express();

app.use(express.json());

app.use("/url", urlRouter);

module.exports = app;
