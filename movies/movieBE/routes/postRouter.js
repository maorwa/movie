const express = require("express");
var router = express.Router();
var postController = require("../controllers/postController");

async function post(request, response, next){
    try{
        let post = null;
        post = await postController.findAll();
        response.json(
            post
        );
    }
    catch(err){}
}

async function createPost(request, response, next){
    try{
        let title = request.body["title"];
        let author = request.body["author"];
        let content = request.body["content"];
        let movie = request.body["movie"];

        let post = await postController.createPost(title, author, content, movie)

        response.json(
            post
        );
    }
    catch(err){
        next(err);
    }
}
async function deletePost(request, response, next){
    try{
        let PostID = request.body["_id"];

        let post = await postController.deletePost(PostID);
        
        response.json(
            post
        );
    }
    catch(err){
        next(err);
    }
}

router.get("/",post);
router.post("/",createPost);
router.delete("/",deletePost);
module.exports = router;