var Post = require("../models/postModel");
var movieController = require("../controllers/movieController");
const knn = require('alike');

class postController {

    static async createPost(title, authorName, content, movieTitle) {

        let date = new Date();
        let movie = (await movieController.findByTitle(movieTitle));

        let post = new Post({
            title: title,
            authorName: authorName,
            date: date,
            content: content,
            imageURL: movie.poster,
            comments: [],
            movie: movie
        });
        try {
            let doc = await post.save();
            console.log(await this._getClosestMovie(movie.title, movie.genre));
            return doc;
        }
        catch (err) { }
    }
    static async findAll() {
        try {
            let postList = await Post.find({}).populate("movie").populate("comments");
            return postList;
        }
        catch (err) { }
    }

    static async findById(postID) {
        try {
            let post = await Post.findOne({ _id: postID })
            return post;
        }
        catch (err) { }
    }

    static async deletePost(title) {
        try {
            await Post.find({ title: title }).deleteOne();
        }
        catch (err) { }
    }

    static async _getClosestMovie(movietitle, moviegenre) {
        let genrelist = await movieController.getAllGenres();
        let genrewights = {};
        let genreexsists = moviegenre.split(', ');
        let genrerank = {};
        let movielist = [];

        let main = true;
        genrelist.forEach(current => {
            genrewights[current] = (1 / genrelist.length);
            genrerank[current] = genreexsists.includes(current) ? (main ? 10 : 8) : 0;
            main = false;
        });

        let options = {
            k: 2,
            weights: genrewights,
        };

        (await movieController.findAll()).forEach(movie => {
            if (movie.title !== movietitle) {
                let currentgenre = { title: movie.title };

                // initial value to make sure all attributes are set
                genrelist.forEach(current => {
                    currentgenre[current] = 0;
                });

                let first = true;
                movie.genre.split(', ').forEach(current => {

                    // The first value is the movie's main genre
                    currentgenre[current] = first ? 10 : 8;
                    first = false;
                });
                movielist.push(currentgenre);
            }
        });

        let selectedMovie = await knn(genrerank, movielist, options);
        return selectedMovie[0].title;
    }
}
module.exports = postController;#