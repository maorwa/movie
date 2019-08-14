const request = require("request-promise");
const key = 'EAAFL50AZBi3gBAPm0uZBgihZAtEMNSWUZAx2pH65jgqLyA1bXIZAdZBqAFCpWrsvIX7D5aECrf6tAxLH4jJPNNfxgRJPBYWiay2AYkOAycyLMYKimrxedKvRRPZAym3ADjU3AZBJZByJ8SeKyZCzyZAfGIPrEZCvMOduqoQ55U8MVOg64lWgKIS9UZAeEG9bbmDupUgEZD';
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