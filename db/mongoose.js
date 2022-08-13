const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_API)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((e) => {
    console.log(e);
  });
