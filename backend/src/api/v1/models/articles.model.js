const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    body: { type: String, required: true },
    summary: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    views: [{ type: Number, default: 0 }],
    author: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    bookmarks: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Articles", articlesSchema);
