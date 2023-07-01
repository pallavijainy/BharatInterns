const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: { type: String, require: true },
  paragraph: { type: String, require: true },
});

const blogModel = mongoose.model("blogs", blogSchema);

module.exports = { blogModel };
