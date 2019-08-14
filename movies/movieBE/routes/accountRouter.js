const express = require("express");
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
const fs = require("fs");
var router = express.Router();
var accountController = require("../controllers/accountController");
const checkAuth = require("../middleware/check-auth");

async function account(request, response, next) {
    try {
        let account = null;
        account = await accountController.getAllAccounts();
        response.json(
            account
        );
    }
    catch (err) { }
}

async function createAccount(request, response, next) {
    try {
        let email = request.body["email"];
        let name = request.body["name"];
        let password = request.body["password"];
        if (validator.isEmail(email) && name && password) {
            let account = await accountController.createAccount(email, name, password);
            response.json(
                account
            );
        } else {
            response.status(400).json({
                status: "error",
                message: "bad input"
            });
        }

    }
    catch (err) {
        next(err);
    }
}
async function deleteAccount(request, response, next) {
    try {
        let accountID = request.body["_id"];
        if (validator.isAlphanumeric(accountID)) {
            let account = await accountController.deleteAccount(accountID);
            response.json(
                account
            );
        } else {
            response.status(400).json({
                status: "error",
                message: "bad input"
            });
        }
    }
    catch (err) {
        next(err);
    }
}
async function login(request, response, next) {
    try {
        let email = request.body["email"];
        let password = request.body["password"];

        if (validator.isEmail(email) && password) {

            let account = await accountController.getAccountByEmail(email);
            if (account.length < 1) {
                return response.status(401).json({
                    success: false,
                    message: 'Auth failed'
                });
            }

            passValidation = await bcrypt.compare(password, account[0].password);
            if (!passValidation) {
                return response.status(401).json({
                    success: false,
                    message: 'Auth failed'
                });
            } else {
                const privatekey = fs.readFileSync('./keys/private.key', 'utf8');
                let token = jwt.sign({
                    email: account[0].email,
                    userId: account[0]._id
                }, privatekey, { expiresIn: 3600, algorithm: "RS256" });

                response.cookie("SESSIONID", token, { httpOnly: true, secure: true });

                return response.status(200).json({
                    message: {
                        token_id: token,
                        expiresIn: 3600
                    },
                    success: true
                });
            }
        } else {
            response.status(400).json({
                success: false,
                message: "bad input"
            });
        }
    }
    catch (err) {
        next(err);
    }
}

router.get("/", account);
router.post("/", checkAuth, createAccount);
router.post("/login", login);
router.delete("/", checkAuth, deleteAccount);
module.exports = router;