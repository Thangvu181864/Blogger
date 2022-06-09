const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./api/v1/routers/user.router");
const tagRoute = require("./api/v1/routers/tag.router");
const articlesRoute = require("./api/v1/routers/articles.router");
const commentRoute = require("./api/v1/routers/comment.router");
const errorHandler = require("./api/v1/middlewares/error.middleware");

const mongoConnect = require("./config/mongoConnect");

mongoConnect();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/tag", tagRoute);
app.use("/api/v1/articles", articlesRoute);
app.use("/api/v1/comment", commentRoute);

app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port: ${port}`));
