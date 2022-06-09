const createError = require("http-errors");
const articlesModel = require("../models/articles.model");
const tagModel = require("../models/tag.model");
const userModel = require("../models/user.model");
const commentModel = require("../models/comment.model");

const createArticles = async (req, res, next) => {
  try {
    const { title, image, body, summary, slug, tags } = req.body;
    if (!title || !image || !body || !slug) {
      throw createError.BadRequest();
    }
    const findArticles = await articlesModel.findOne({ slug });
    if (findArticles) {
      throw createError.Conflict();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    const createArticles = await articlesModel.create({
      title,
      image,
      body,
      summary,
      slug,
      author: req.user.id,
    });
    await userModel.findByIdAndUpdate(req.user.id, {
      $push: {
        articleses: createArticles._id,
      },
    });
    if (Array.isArray(tags) && tags.length) {
      Promise.all(
        tags.map(async (slug) => {
          const tag = await tagModel.findOneAndUpdate(
            { slug },
            {
              $push: {
                articleses: createArticles._id,
              },
            }
          );
          await articlesModel.findByIdAndUpdate(createArticles._id, {
            $push: { tags: tag._id },
          });
        })
      );
    } else {
      const tag = await tagModel.findByIdAndUpdate(tags, {
        $push: {
          articleses: createArticles._id,
        },
      });
      await articlesModel.findByIdAndUpdate(createArticles._id, {
        $push: { tags: tag._id },
      });
    }
    return res.status(201).json({
      data: createArticles,
    });
  } catch (error) {
    next(error);
  }
};

const updateArticles = async (req, res, next) => {
  try {
    const { title, image, body, summary, slug, tags } = req.body;
    const articles = await articlesModel.findOne({ slug: req.params.slug });
    if (!articles) {
      throw createError.NotFound();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    if (articles.author.toString() !== req.user.id) {
      throw createError.Unauthorized();
    }
    Promise.all(
      articles.tags.map(async (tag) => {
        await tagModel.findByIdAndUpdate(tag, {
          $pull: {
            articleses: articles._id,
          },
        });
      })
    );
    await articlesModel.findByIdAndUpdate(articles._id, {
      $pullAll: {
        tags: articles.tags,
      },
    });
    const updateArticles = await articlesModel.findByIdAndUpdate(
      articles._id,
      {
        title,
        image,
        body,
        summary,
        slug,
      },
      { new: true }
    );
    if (Array.isArray(tags) && tags.length) {
      Promise.all(
        tags.map(async (slug) => {
          const tag = await tagModel.findOneAndUpdate(
            { slug },
            {
              $push: {
                articleses: articles._id,
              },
            }
          );
          await articlesModel.findByIdAndUpdate(articles._id, {
            $push: { tags: tag._id },
          });
        })
      );
    } else {
      const tag = await tagModel.findByIdAndUpdate(tags, {
        $push: {
          articleses: articles._id,
        },
      });
      await articlesModel.findByIdAndUpdate(articles._id, {
        $push: { tags: tag._id },
      });
    }
    return res.status(200).json({
      data: updateArticles,
    });
  } catch (error) {
    next(error);
  }
};

const deleteArticles = async (req, res, next) => {
  try {
    const articles = await articlesModel.findOne({ slug: req.params.slug });
    if (!articles) {
      throw createError.NotFound();
    }
    if (!req.user) {
      throw createError.Unauthorized();
    }
    if (articles.author.toString() !== req.user.id) {
      throw createError.Unauthorized();
    }

    await userModel.findByIdAndUpdate(req.user.id, {
      $pull: {
        articleses: articles._id,
      },
    });

    Promise.all(
      articles.tags.map(async (tag) => {
        await tagModel.findByIdAndUpdate(tag, {
          $pull: {
            articleses: articles._id,
          },
        });
      })
    );

    Promise.all(
      articles.likes.map(async (like) => {
        await userModel.findOneAndUpdate(
          { likes: { $in: [articles._id] } },
          {
            $pull: {
              likes: articles._id,
            },
          }
        );
      })
    );

    Promise.all(
      articles.bookmarks.map(async (bookmark) => {
        await userModel.findOneAndUpdate(
          { bookmarks: { $in: [articles._id] } },
          {
            $pull: {
              bookmarks: articles._id,
            },
          }
        );
      })
    );

    Promise.all(
      articles.comments.map(async (comment) => {
        await commentModel.findByIdAndRemove(comment);
        await userModel.findOneAndUpdate(
          { comments: { $in: [comment] } },
          {
            $pull: {
              comments: comment,
            },
          }
        );
      })
    );

    const removeArticles = await articles.remove();
    return res.status(200).json({
      data: removeArticles,
    });
  } catch (error) {
    next(error);
  }
};

const getArticles = async (req, res, next) => {
  try {
    const articles = await articlesModel.findOne({ slug: req.params.slug });
    if (!articles) {
      throw createError.NotFound();
    }
    return res.status(200).json({
      data: articles,
    });
  } catch (error) {
    next(error);
  }
};

const getAllArticleses = async (req, res, next) => {
  try {
    const articleses = await articlesModel.find({});
    return res.status(200).json({
      data: articleses,
    });
  } catch (error) {
    next(error);
  }
};

const likeArticles = async (req, res, next) => {
  const articles = await articlesModel.findOne({ slug: req.params.slug });
  if (!articles) {
    throw createError.NotFound();
  }
  if (!req.user) {
    throw createError.Unauthorized();
  }
  if (articles.likes.includes(req.user.id)) {
    await articlesModel.findByIdAndUpdate(
      articles._id,
      {
        $pull: {
          likes: req.user.id,
        },
      },
      { new: true }
    );
    await userModel.findByIdAndUpdate(
      req.user.id,
      {
        $pull: {
          likes: articles._id,
        },
      },
      { new: true }
    );
  } else {
    await articlesModel.findByIdAndUpdate(
      articles._id,
      {
        $push: {
          likes: req.user.id,
        },
      },
      { new: true }
    );
    await userModel.findByIdAndUpdate(
      req.user.id,
      {
        $push: {
          likes: articles._id,
        },
      },
      { new: true }
    );
  }
  const updateArticles = await articlesModel.findById(articles._id);

  return res.status(200).json({
    data: updateArticles.likes.length,
  });
};

const bookmarkArticles = async (req, res, next) => {
  const articles = await articlesModel.findOne({ slug: req.params.slug });
  if (!articles) {
    throw createError.NotFound();
  }
  if (!req.user) {
    throw createError.Unauthorized();
  }
  if (articles.bookmarks.includes(req.user.id)) {
    await articlesModel.findByIdAndUpdate(
      articles._id,
      {
        $pull: {
          bookmarks: req.user.id,
        },
      },
      { new: true }
    );
    await userModel.findByIdAndUpdate(
      req.user.id,
      {
        $pull: {
          bookmarks: articles._id,
        },
      },
      { new: true }
    );
  } else {
    await articlesModel.findByIdAndUpdate(
      articles._id,
      {
        $push: {
          bookmarks: req.user.id,
        },
      },
      { new: true }
    );
    await userModel.findByIdAndUpdate(
      req.user.id,
      {
        $push: {
          bookmarks: articles._id,
        },
      },
      { new: true }
    );
  }

  const updateArticles = await articlesModel.findById(articles._id);

  return res.status(200).json({
    data: updateArticles,
  });
};

module.exports = {
  createArticles,
  updateArticles,
  deleteArticles,
  getArticles,
  getAllArticleses,
  likeArticles,
  bookmarkArticles,
};
