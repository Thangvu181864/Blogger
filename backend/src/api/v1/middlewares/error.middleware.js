const errorHandler = (err, req, res, next) => {
  const statusCode = err.status ? err.status : 500;
  res.status(statusCode);
  res.json({
    status: err.status || 500,
    message: err.message,
  });
};

module.exports = errorHandler;
