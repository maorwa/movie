const express = require("express");
var router = express.Router();
var movieController = require("../controllers/movieController");

async function movie(request, response, next){
    try{
        let movie = null;
        movie = await movieController.findAll();
        response.json(
            movie
        );
    }
    catch(err){}
}

async function createMovie(request, response, next){
    try{
        let movieTitle = request.body["title"];
        let movieYear = request.body["year"];

        let movie = await movieController.createMovie(movieTitle, movieYear);
        
        response.json(
            movie
        );
    }
    catch(err){
        next(err);
    }
}
router.get("/",movie);
router.post("/",createMovie);
module.exports = router;