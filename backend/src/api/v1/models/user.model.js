const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, lowercase: true, required: true, unique: true },
    email: { type: String, lowercase: true, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    bio: { type: String },
    articleses: [{ type: mongoose.Types.ObjectId, ref: "Articles" }],
    likes: [{ type: mongoose.Types.ObjectId, ref: "Articles" }],
    comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    followedTags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    bookmarks: [{ type: mongoose.Types.ObjectId, ref: "Articles" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
