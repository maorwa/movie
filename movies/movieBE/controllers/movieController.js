const Movie = require("../models/movieModel");
const OMDB = require('../webServices/omdb');
const facebook = require('../webServices/facebook');

class movieController{
    
    static async createMovie(title, year){
        let omdbDetails = await this._OMDBDetails(title,year);
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
        try{
            let doc = await movie.save();
            this._facebookPost(movie.title);
            return doc;
        }
        catch(err){}
    }

    static async findAll(){
        try{
            let movieList = await Movie.find({});
            return movieList;
        }
        catch(err){}
    }
    
    static async findByTitle(movieTitle){
        try{
            let movieList = await Movie.findOne({title: movieTitle});
            return movieList;
        }
        catch(err){}
    }

    static async updateMovie(movieID, movieTitle, movieYear){
        try{
            if(movieID && movieTitle && movieYear){
                await Movie.updateOne({ _id: movieID }, { $set: { title: movieTitle,
                year: movieYear}});
            }
        }
        catch(err){}
    }

    static async deleteMovie(movieID){
        try{
            await Movie.find({_id: movieID}).deleteOne();
        }
        catch(err){}
    }

    static async _OMDBDetails(title, year){
        return await OMDB.getMovieDetails(title, year);
    }

    static async _facebookPost(title){
        return await facebook.getMovieDetails(title);
    }
}
module.exports = movieController;