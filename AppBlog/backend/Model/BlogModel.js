const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    summery: String,
    content: String,
    cover: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("post", PostSchema);

module.exports = { PostModel };
