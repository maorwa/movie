const express = require("express");
var router = express.Router();
var commentController = require("../controllers/commentController");
const checkAuth = require("../middleware/check-auth");

async function comment(request, response, next){
    try{
        let comment = null;
        comment = await commentController.findAll();
        response.json(
            comment
        );
    }
    catch(err){}
}

async function createComment(request, response, next){
    try{
        let author  = request.body["author"];
        let content = request.body["content"];
        let postID  = request.body["postID"];
        if(author &&content&&postID){
        let comment = await commentController.createComment(author, content, postID);
        
        response.json(
            comment
        );}
        else{
            response.status(400).json({
                status: "error",                 
                message: "bad input"
            });
        }
    }
    catch(err){
        next(err);
    }
}
async function deleteComment(request, response, next){
    try{
        let commentID   = request.body["_id"];
        if(validator.isAlphanumeric(commentID)){
        let comment = await commentController.deleteComment(commentID);
        
        response.json(
            comment
        );}else{
            response.status(400).json({
                status: "error",                 
                message: "bad input"
            });
        }
    }
    catch(err){
        next(err);
    }
}
router.get("/",comment);
router.post("/",createComment);
router.delete("/",checkAuth ,deleteComment);
module.exports = router;