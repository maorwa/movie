const request = require("request-promise");
const key = '59fd6c64';
const baseUrl = 'http://www.omdbapi.com/';

class OMDB{
   
    static async getMovieDetails(movieTitle, movieYear){
        if(movieTitle && movieYear){
        let url = baseUrl+ '?t='+ this._buildMovieTitle(movieTitle) + '&y=' + movieYear + '&&apikey=' + key;
        return request(url,{json:true});
        }
    }
    
    static _buildMovieTitle(movieTitle){
        if(movieTitle){
        return movieTitle.replace(/\s/g,"+");
        }
    }
}
module.exports = OMDB;