const request = require("request-promise");
const key = 'EAAFL50AZBi3gBAEo6HPiKZBjShZAanqNeAQfZABZAvdZBH3piD7LZAYhu5SnKDCqnTxlTLWU9tv78fW90ZAOMyRPmjdOxQ5IvoG7Mgskj9VvRZATZCpFhUOSjhrs54q1Ep4TZAFwi2AVgiY60y8VEol9tROcMJxFRyYztATOsVqUkF0GsFcZB6Bil9YR9MnAranKZAe8ZD';
const url = 'https://graph.facebook.com/691063014706849/feed';

class facebook{
   
    static async getMovieDetails(movieTitle){
        if(movieTitle){
            request.post(url, {form:{
                message: "new movie: " + movieTitle,
	            access_token: key
            }})
        }
    }
}
module.exports = facebook;