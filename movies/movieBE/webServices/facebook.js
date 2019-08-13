const request = require("request-promise");
const key = 'EAAFL50AZBi3gBAKADqo4RzHVEPpWuOThhjTdzOfwqFeR8ZCfeFus0dGDORb2hIbJd7DrHZCx7wYYJMcKFewj3zo1K6ZCZATpWsz7UHBUWFU2Yv7aa8tM9KgQjoNlL9lqEdggV4arsPh8vGzdur4V0B9XujRHBT0lAMsN8KDZCMiLbge5fZA6Kh39yKGeS0xytoZD';
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