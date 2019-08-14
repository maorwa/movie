const request = require("request-promise");
const key = 'EAAFL50AZBi3gBADYxJOGEJdZCClDM3PreITzIZCQMeBif8hzteafl2YoiOz4EvdreSzNp8pZCTtWwutqUSVHBPeFRJf8cRHTuwb0YGMf6TEWDk6F8quuflb0Akyfcub6Cf2MDCSKnXvOZCozzZA4sdFdBLRgIwoVPSVX4ahDiNrPRaQzY1XHBoTukgWqrU1H4ZD';
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