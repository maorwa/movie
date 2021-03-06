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
            io.emit("refreshAccount");
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

    static async deleteAccount(accountID) {
        try {
            await Account.find({ _id: accountID }).deleteOne();
            io.emit("refreshAccount");
        }
        catch (err) { }
    }
}
module.exports = accountController;