const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://pallavi:pallavi@cluster0.jmdsll3.mongodb.net/chatapp?retryWrites=true&w=majority"
);

module.exports = { connection };
