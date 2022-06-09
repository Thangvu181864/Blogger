const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    articles: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Articles",
    },
    parentId: { type: mongoose.Types.ObjectId, ref: "Comment", default: null },
    author: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    likes: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
