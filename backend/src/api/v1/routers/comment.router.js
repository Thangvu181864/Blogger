const express = require("express");
const {
  createComment,
  updateComment,
  deleteComment,
  getComment,
} = require("../controllers/comment.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/:slug", protect, createComment);
router.patch("/:slug/:comment_id", protect, updateComment);
router.delete("/:slug/:comment_id", protect, deleteComment);
router.get("/:slug/", getComment);

module.exports = router;
