const express = require("express");
var router = express.Router();
var postController = require("../controllers/postController");
const checkAuth = require("../middleware/check-auth");

async function post(request, response, next) {
    try {
        let post = null;
        post = await postController.findAll();
        response.json(
            post
        );
    }
    catch (err) { }
}

async function createPost(request, response, next) {
    try {
        let title = request.body["title"];
        let author = request.body["author"];
        let content = request.body["content"];
        let movie = request.body["movie"];
        if (movie && title && author && content) {
            let post = await postController.createPost(title, author, content, movie)

            response.json(
                post
            );
        } else {
            response.status(400).json({
                status: "error",                 
                message: "bad input"
            });
        }
    }
    catch (err) {
        next(err);
    }
}
async function deletePost(request, response, next) {
    try {
        let PostID = request.body["_id"];
        if (validator.isAlphanumeric(PostID)) {
            let post = await postController.deletePost(PostID);


            response.json(
                post
            );
        } else {
            response.status(400).json({
                status: "error",
                message: "bad input"
            });
        }
    }
    catch (err) {
        next(err);
    }
}

router.get("/", post);
router.post("/", createPost);
router.delete("/", checkAuth, deletePost);
module.exports = router;