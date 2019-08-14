var jwt = require('jsonwebtoken');
const fs = require("fs");

module.exports = (req, res, next) => {
   try{
    const token = req.body.token;
    const publickey = fs.readFileSync('./keys/public.key', 'utf8');
    const decoded = jwt.verify(token, publickey, {algorithm: "RS256" })
    req.userData = decoded;
    next();
   }catch(err){
       return res.status(401).json({
           message: 'Auth failed'
       })
   }

}