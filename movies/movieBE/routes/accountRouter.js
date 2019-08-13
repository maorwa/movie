const express = require("express");
var bcrypt =require("bcryptjs");
var jwt = require('jsonwebtoken');
const fs = require("fs");
var router = express.Router();
var accountController = require("../controllers/accountController");

async function account(request, response, next){
    try{
        let account = null;
        account = await accountController.getAllAccounts();
        response.json(
            account
        );
    }
    catch(err){}
}

async function createAccount(request, response, next){
    try{
        let email = request.body["email"];
        let name = request.body["name"];
        let password = request.body["password"];
        let isAdmin = request.body["isAdmin"];
        let account = await accountController.createAccount(email, name, password, isAdmin);
        response.json(
            account
        );
    }
    catch(err){
        next(err);
    }
}

async function login(request, response, next){
    try{
        let email = request.body["email"];
        let password = request.body["password"];
        
        let account = await accountController.getAccountByEmail(email);
        if(account.length < 1){
            return response.status(401).json({
                success: false,
                message: 'Auth failed'
            },);
        }

        passValidation = await bcrypt.compare(password,account[0].password);
        if(!passValidation){
            return response.status(401).json({
                success: false,
                message: 'Auth failed'
            });
        }else{
            const privatekey = fs.readFileSync('./keys/private.key','utf8');
            let token = jwt.sign({
                email: account[0].email,
                isAdmin: account[0].isAdmin,
                userId:account[0]._id 
            }, privatekey, {expiresIn : "1h", algorithm : "RS256"});
            
            response.cookie("SESSIONID", token, {httpOnly:true, secure:true});

            return response.status(200).json({
                success: true,
                message: token
            });
        }
    }
    catch(err){
        next(err);
    }
}

router.get("/",account);
router.post("/",createAccount);
router.post("/login",login);
module.exports = router;