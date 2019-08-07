var Post = require("../models/postModel");
var movieController = require("../controllers/movieController");

class postController{
    
    static async createPost(title, authorName, content, imageURL, movieTitle){
        
        let date = new Date();
        let movie = (await movieController.findByTitle(movieTitle))[0];

        let post = new Post({
            title: title,
            authorName: authorName,
            date: date,
            content: content,
            imageURL: imageURL,
            comments: [],
            movie: movie

        });
        try{
            let doc = await post.save();
            return doc;
        }
        catch(err){}
    }
    static async findAll(){
        try{
            let postList = await Post.find({}).populate("movie").populate("comments");
            return postList;
        }
        catch(err){}
    }
    
    static async findById(postID){
        try{
            let post = await Post.findOne({_id: postID})
            return post;
        }
        catch(err){}
    }

    static async deletePost(title){
        try{
            await Post.find({title: title}).deleteOne();
        }
        catch(err){}
    }
}
module.exports = postController;