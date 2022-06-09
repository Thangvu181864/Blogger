const createError = require("http-errors");
const { verifyAccessToken } = require("../services/jwt.service");
const userModel = require("../models/user.model");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Beare")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = verifyAccessToken(token);
      req.user = await userModel.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      throw createError(error);
    }
  }
  if (!token) {
    throw createError.authorization();
  }
};
module.exports = protect;
