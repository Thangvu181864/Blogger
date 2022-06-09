const express = require("express");
const {
  createArticles,
  updateArticles,
  deleteArticles,
  getArticles,
  getAllArticleses,
  likeArticles,
  bookmarkArticles
} = require("../controllers/articles.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", protect, createArticles);
router.patch("/:slug", protect, updateArticles);
router.delete("/:slug", protect, deleteArticles);
router.get("/:slug", getArticles);
router.get("/", getAllArticleses);
router.post("/:slug/like", protect, likeArticles);
router.post("/:slug/bookmark", protect, bookmarkArticles);

module.exports = router;
