const mongoose = require("mongoose");
const app = require("./app.js");

// const port = 4000;

// // CREATE SERVER
// const server = app.listen(port, () => {
//   console.log(`Server started & it is listening on Port:${port}`);
// });

//CONNECT TO MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("DB Connection Successful");
});

module.exports = app;
