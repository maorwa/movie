var bcrypt =require("bcryptjs");
var Account = require("../models/account");

class accountController{
    
    static async createAccount(email, name, password){
        try{
            let account = new Account({
                email: email,
                name: name,
                password: await bcrypt.hash(password, 10)
            });
            let doc = await account.save();
            return doc;
        }
        catch(err){}
    }

    static async getAllAccounts(){
        try{
            let accountList = await Account.find({});
            return accountList;
        }
        catch(err){}
    }

    static async getAccountByEmail(email){
        try{
            let accountList = await Account.find({email: email});
            return accountList;
        }
        catch(err){}
    }
}
module.exports = accountController;