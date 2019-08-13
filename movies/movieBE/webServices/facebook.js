const request = require("request-promise");
const key = 'EAAFL50AZBi3gBAA7DhTy8UPaKK9LbU20GkIxpRjvsWQD1ouZA2NNdcuOEnK7MZB83vuCvTKpvn86ZAWZBjCVxbTA2PUnkC7cmZCBZBugYscj7IXZCvHq9YYjh7BHMCAmqg4To3yqRZBq7a4dFKXGIcZBOKdxY7GuVHTCUYEAwoecZA3EXutu65WCJ0Vc1vrmNnzMI0ZD';
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