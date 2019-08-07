var Movie = require("../models/movieModel");

class movieController{
    
    static async createMovie(title, year){
        let movie = new Movie({
            title: title,
            year: year
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
}
module.exports = movieController;