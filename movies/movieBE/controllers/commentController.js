var Comment = require("../models/commentModel");
var Post = require("../controllers/postController");

class commentController{
    
    static async createComment(title, authorName, content, postID){
        let comment = new Comment({
            title: title,
            authorName: authorName,
            content: content
        });
        try{
            let doc = await comment.save();
            const post = await Post.findById(postID);
            post.comments.push(comment);
            await post.save();
            return doc;
        }
        catch(err){}
    }

    static async findAll(){
        try{
            let commentList = await Comment.find({});
            return commentList;
        }
        catch(err){}
    }

    static async deleteComment(title){
        try{
            await Comment.find({title: title}).deleteOne();
        }
        catch(err){}
    }
}
module.exports = commentController;