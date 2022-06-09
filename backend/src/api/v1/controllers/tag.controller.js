const createError = require("http-errors");
const tagModel = require("../models/tag.model");
const userModel = require("../models/user.model");

const createTag = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    if (!name || !slug) {
      throw createError.BadRequest();
    }
    const findTag = await tagModel.findOne({ slug });
    if (findTag) {
      throw createError.Conflict();
    }
    const createTag = await tagModel.create({
      name,
      slug,
    });
    return res.status(201).json({
      data: createTag,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTags = async (req, res, next) => {
  try {
    const tags = await tagModel.find({});
    return res.status(201).json({
      data: tags,
    });
  } catch (error) {
    next(error);
  }
};

const followTag = async (req, res, next) => {
  try {
    const tag = await tagModel.findOne({ slug: req.params.slug });
    if (!tag) {
      throw createError.NotFound();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    if (tag.followers.includes(req.user.id)) {
      await userModel.findByIdAndUpdate(req.user.id, {
        $pull: {
          followedTags: tag._id,
        },
      });
      await tagModel.findByIdAndUpdate(tag._id, {
        $pull: {
          followers: req.user.id,
        },
      });
    } else {
      await userModel.findByIdAndUpdate(req.user.id, {
        $push: {
          followedTags: tag._id,
        },
      });
      await tagModel.findByIdAndUpdate(tag._id, {
        $push: {
          followers: req.user.id,
        },
      });
    }
    const updateTag = await tagModel.findById(tag._id);
    return res.status(200).json({ data: updateTag });
  } catch (error) {
    next(error);
  }
};
module.exports = { createTag, getAllTags, followTag };
