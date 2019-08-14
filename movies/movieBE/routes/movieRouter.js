const express = require("express");
var router = express.Router();
var movieController = require("../controllers/movieController");
const checkAuth = require("../middleware/check-auth");

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

async function updateeMovie(request, response, next){
    try{
        let _id = request.body["_id"];
        let movieTitle = request.body["title"];
        let movieYear = request.body["year"];
        if(validator.isAlphanumeric(_id)&&validator.isAlphanumeric(movieTitle)&&validator.isNumeric(movieYear)){
        let movie = await movieController.updateMovie(_id,movieTitle, movieYear);
        
        response.json(
            movie
        );}
        else{
            response.status(400).json({
                status: "bad input"
            });
        }
    }
    catch(err){
        next(err);
    }
}

async function createMovie(request, response, next){
    try{
        let movieTitle = request.body["title"];
        let movieYear = request.body["year"];

        if(validator.isNumeric(movieYear)){
        let movie = await movieController.createMovie(movieTitle, movieYear);
        
        response.json(
            movie
        );}else{
            response.status(400).json({
                status: "bad input"
            });
        }
    }
    catch(err){
        next(err);
    }
}

async function deleteMovie(request, response, next){
    try{
        let movieID = request.body["_id"];
        if(validator.isAlphanumeric(movieID)){
        let movie = await movieController.deleteMovie(movieID);
        
        response.json(
            movie
        );}else{
            response.status(400).json({
                status: "bad input"
            });
        }
    }
    catch(err){
        next(err);
    }
}

router.get("/",movie);
router.put("/", checkAuth, updateeMovie);
router.post("/", checkAuth, createMovie);
router.delete("/", checkAuth, deleteMovie);
module.exports = router;