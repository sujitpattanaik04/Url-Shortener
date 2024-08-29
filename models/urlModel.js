const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: String,
          set: (val) => {
            return new Date(val).toLocaleString();
          },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema);
