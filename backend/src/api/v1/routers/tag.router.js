const express = require("express");
const protect = require("../middlewares/auth.middleware");
const {
  createTag,
  getAllTags,
  followTag,
} = require("../controllers/tag.controller");

const router = express.Router();

router.post("/", createTag);
router.get("/", getAllTags);
router.post("/:slug/follow", protect, followTag);

module.exports = router;
