var Map = require("../models/mapModel");

class mapController{
    
    static async createAddress(name, address){
        let addressMap = new Map({
            name: name,
            address: address
        });
        try{
            let doc = await addressMap.save();
            return doc;
        }
        catch(err){}
    }

    static async findAll(){
        try{
            let addressList = await Map.find({});
            return addressList;
        }
        catch(err){}
    }

    static async deleteAddress(addressName){
        try{
            await Map.find({name: addressName}).deleteOne();
        }
        catch(err){}
    }
}
module.exports = mapController;