const Movie = require("../models/movieModel");
const OMDB = require('../webServices/omdb');
const facebook = require('../webServices/facebook');
const Post = require('../models/postModel');
class movieController {

    static async createMovie(title, year) {
        let omdbDetails = await this._OMDBDetails(title, year);
        if (omdbDetails.Error) {
            return {
                message: "movie not found"
            }
        }
        let movie = new Movie({
            title: omdbDetails.Title,
            year: year,
            genre: omdbDetails.Genre,
            runtime: omdbDetails.Runtime,
            plot: omdbDetails.Plot,
            imdbID: omdbDetails.imdbID,
            country: omdbDetails.Country,
            poster: omdbDetails.Poster,
            votes: parseFloat((omdbDetails.imdbVotes).replace(/,/g, '')),
            ranking: parseFloat(omdbDetails.imdbRating)

        });
        try {
            let doc = await movie.save();
            io.emit("refreshMovie");
            this._facebookPost(movie.title);
            return doc;
        }
        catch (err) { }
    }

    static async findAll() {
        try {
            let movieList = await Movie.find({});
            return movieList;
        }
        catch (err) { }
    }
    
    static async findByTitle(movieTitle) {
        try {
            let movieList = await Movie.findOne({ title: movieTitle });
            return movieList;
        }
        catch (err) { }
    }

    static async findByID(movieID) {
        try {
            let movie = await Movie.findOne({ _id: movieID });
            return movie;
        }
        catch (err) { }
    }

    static async updateMovie(movieID, movieTitle, movieYear) {
        try {
            if (movieID && movieTitle && movieYear) {
                await Movie.updateOne({ _id: movieID }, {
                    $set: {
                        title: movieTitle,
                        year: movieYear
                    }
                });
                io.emit("refreshMovie");
            }
        }
        catch (err) { }
    }

    static async deleteMovie(movieID) {
        try {
            let movie = await Movie.findOne({ _id: movieID });
            let movieList = await Post.findOne({movie: movie});
            if (!movieList) {
                await Movie.find({ _id: movieID }).deleteOne();
                io.emit("refreshMovie");
            }
        }
        catch (err) { }
    }

    static async _OMDBDetails(title, year) {
        return await OMDB.getMovieDetails(title, year);
    }

    static async _facebookPost(title) {
        let message = "New movie: " + title;
        await facebook.newPost(message);
    }

    static async getAllGenres() {
        let moviearray = await this.findAll();
        var genres = [];
        moviearray.forEach(movie => {
            movie.genre.split(', ').forEach(genre => {
                if (!genres.includes(genre)) {
                    genres.push(genre);
                }
            });
        });
        return genres;
    }
}
module.exports = movieController;