const request = require("request-promise");
const key = 'EAAFL50AZBi3gBAAKvjo3KgHaFCELVyRLfVYpyKCNu4PlUUEZBc97veJ166Dz3FBXJKOoOHIuZAc3cziVbksgJBjGDpP8qlfGVPJ5HZAHF5uzVbOgBNliMUX42ZASFfQHGurZCVoW5IucpiMlsoeRZB6DKfcuEDoKyElPl2Opfswmrml0l2H586jymQycMSjFbIZD';
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