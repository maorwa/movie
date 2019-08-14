const request = require("request-promise");
const key = 'EAAFL50AZBi3gBAKaVXmJ43bEqyf0JvMy3USn9afZAS5dzCSliTgvirOjko4suggIONAIKrcTYWgXnD9JdVgkLh12FQlBWkq8BEap10xfOsLsuo5sJIu9pwCjAtVuzCuOrPWtZAop4Ev7yfsGQpZBoH1ZByeLQSJA6x4j7QWl880lh3ML1RPeGsZBx6xGly8wsZD';
const url = 'https://graph.facebook.com/691063014706849/feed';

class facebook{
   
    static async newPost(message){
        if(message){
            request.post(url, {form:{
                message: message,
	            access_token: key
            }})
        }
    }
}
module.exports = facebook;