const express = require("express");
const protect = require("../middlewares/auth.middleware");

const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  refreshToken,
  followUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/:username", protect, updateUser);
router.delete("/:username", protect, deleteUser);
router.get("/:username", getUser);
router.post("/refresh-token", refreshToken);
router.post("/:username/follow", protect, followUser);

module.exports = router;
