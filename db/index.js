const mongoose = require("mongoose");
const config = require('../config');
mongoose.connect(
  config.db,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Connected");
    }
  }
);
