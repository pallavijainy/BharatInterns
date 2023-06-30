const mongoose = require("mongoose");

const Connection = mongoose.connect(
  "mongodb+srv://pallavi:pallavi@cluster0.jmdsll3.mongodb.net/blogapp?retryWrites=true&w=majority"
);

module.exports = { Connection };
