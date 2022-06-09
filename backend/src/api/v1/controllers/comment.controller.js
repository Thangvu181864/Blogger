const createError = require("http-errors");
const articlesModel = require("../models/articles.model");
const commentModel = require("../models/comment.model");
const userModel = require("../models/user.model");

const createComment = async (req, res, next) => {
  try {
    const { body, parentId } = req.body;
    const articles = await articlesModel.findOne({ slug: req.params.slug });
    if (!articles) {
      throw createError.NotFound();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    const createComment = await commentModel.create({
      body,
      parentId,
      articles: articles._id,
      author: req.user.id,
    });
    await userModel.findByIdAndUpdate(req.user.id, {
      $push: {
        comments: createComment._id,
      },
    });
    await articlesModel.findByIdAndUpdate(articles._id, {
      $push: {
        comments: createComment._id,
      },
    });
    return res.status(201).json({
      data: createComment,
    });
  } catch (error) {
    next(error);
  }
};

const updateComment = async (req, res, next) => {
  try {
    const { body } = req.body;
    const articles = await articlesModel.findOne({ slug: req.params.slug });
    if (!articles) {
      throw createError.NotFound();
    }
    const comment = await commentModel.findById(req.params.comment_id);
    if (!comment) {
      throw createError.NotFound();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    const updateComment = await commentModel.findByIdAndUpdate(
      req.params.comment_id,
      { body },
      { new: true }
    );
    return res.status(200).json({
      data: updateComment,
    });
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const articles = await articlesModel.findOne({ slug: req.params.slug });
    if (!articles) {
      throw createError.NotFound();
    }
    const comment = await commentModel.findById(req.params.comment_id);
    if (!comment) {
      throw createError.NotFound();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    if (comment.author.toString() !== req.user.id) {
      throw createError.Unauthorized();
    }
    await userModel.findByIdAndUpdate(req.user.id, {
      $pull: {
        comments: comment._id,
      },
    });
    await articlesModel.findByIdAndUpdate(articles._id, {
      $pull: {
        comments: comment._id,
      },
    });
    const childrenComment = await commentModel.find({ parentId: comment._id });
    if (childrenComment) {
      Promise.all(
        childrenComment.map(async (comment) => {
          await userModel.findOneAndUpdate(
            { comments: { $in: [comment._id] } },
            {
              $pull: {
                comments: comment._id,
              },
            }
          );
          await articlesModel.findOneAndUpdate(
            { comments: { $in: [comment._id] } },
            {
              $pull: {
                comments: comment._id,
              },
            }
          );
          await commentModel.findByIdAndDelete(comment_id);
        })
      );
    }
    const removeComment = await comment.remove();
    return res.status(200).json({
      data: removeComment,
    });
  } catch (error) {
    next(error);
  }
};

const getComment = async (req, res, next) => {
  try {
    const articles = await articlesModel.findOne({ slug: req.params.slug });
    if (!articles) {
      throw createError.NotFound();
    }
    const comments = await commentModel.find({ articles: articles._id });
    const result = comments
      .filter((element) => element.parentId === null)
      .map((comment) => {
        return {
          ...comment,
          children: comments.filter(
            (element) => element.parentId === comment.author
          ),
        };
      });
    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createComment, updateComment, deleteComment, getComment };
