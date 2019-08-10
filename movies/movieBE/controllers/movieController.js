const Movie = require("../models/movieModel");
const OMDB = require('../webServices/omdb');

class movieController{
    
    static async createMovie(title, year){
        let omdbDetails = await this._OMDBDetails(title,year);
        let movie = new Movie({
            title: omdbDetails.Title,
            year: year,
            plot: omdbDetails.Plot,
            imdbID: omdbDetails.imdbID,
            country: omdbDetails.Country,
            poster: omdbDetails.Poster
        });
        try{
            let doc = await movie.save();
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

    static async deleteMovie(movieTitle){
        try{
            await Movie.find({Title: movieTitle}).deleteOne();
        }
        catch(err){}
    }
    static async _OMDBDetails(title, year){
        return await OMDB.getMovieDetails(title, year);
    }
}
module.exports = movieController;