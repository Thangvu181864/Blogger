const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const { signAccessToken } = require("../services/jwt.service");

const registerUser = async (req, res, next) => {
  try {
    const { name, username, email, password, avatar, bio } = req.body;
    if (!name || !username || !email || !password) {
      throw createError.BadRequest();
    }
    const findUser = await userModel.findOne({ email });
    if (findUser) {
      throw createError.Conflict();
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const createUser = await userModel.create({
      ...req.body,
      password: hashPassword,
    });
    return res.status(201).json({
      data: createUser,
      "access-token": signAccessToken({ id: createUser._id }),
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw createError.BadRequest();
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw createError.NotFound();
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      throw createError.Unauthorized();
    }
    return res.status(200).json({
      data: user,
      "access-token": signAccessToken({ id: user._id }),
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { name, username, email, avatar, bio } = req.body;
    const user = await userModel.findOne({ username: req.params.username });
    if (!user) {
      throw createError.NotFound();
    }
    if (user._id.toString() !== req.user.id) {
      throw createError.Unauthorized();
    }
    const updateUser = await userModel.findByIdAndUpdate(
      user._id,
      { name, username, email, avatar, bio },
      { new: true }
    );
    return res.status(200).json({ data: updateUser });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.params.username });
    if (!user) {
      throw createError.NotFound();
    }
    if (user._id.toString() !== req.user.id) {
      throw createError.Unauthorized();
    }
    const removeUser = await user.remove();
    return res.status(200).json({ data: removeUser });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.params.username });
    if (!user) {
      throw createError.NotFound();
    }
    return res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const followUser = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.params.username });
    if (!user) {
      throw createError.NotFound();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    if (user.followers.includes(req.user.id)) {
      await userModel.findByIdAndUpdate(user._id, {
        $pull: {
          followers: req.user.id,
        },
      });
      await userModel.findByIdAndUpdate(req.user.id, {
        $pull: {
          following: user._id,
        },
      });
    } else {
      await userModel.findByIdAndUpdate(req.user.id, {
        $push: {
          following: user._id,
        },
      });
      await userModel.findByIdAndUpdate(user._id, {
        $push: {
          followers: req.user.id,
        },
      });
    }
    const updateUser = await userModel.findById(req.user.id);
    return res.status(200).json({ data: updateUser });
  } catch (error) {
    next(error);
  }
};



module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  refreshToken,
  followUser,
};
