const express = require("express");
const AccountRouter = require("./accountRouter");
const movieRouter = require("./movieRouter");
const commentRouter = require("./commentRouter");
const postRouter = require("./postRouter");

const router = express.Router();
router.use("/account", AccountRouter);
router.use("/movie", movieRouter);
router.use("/comment", commentRouter);
router.use("/post",postRouter);

module.exports = router;