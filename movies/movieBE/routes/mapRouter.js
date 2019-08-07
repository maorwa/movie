const express = require("express");
var router = express.Router();
var mapController = require("../controllers/mapController");

async function map(request, response, next){
    try{
        let map = null;
        map = await mapController.findAll();
        response.json(
            map
        );
    }
    catch(err){}
}

async function createAddress(request, response, next){
    try{
        let name = request.body["name"];
        let address = request.body["address"];

        let map = await mapController.createAddress(name, address);
        
        response.json(
            map
        );
    }
    catch(err){
        next(err);
    }
}
router.get("/",map);
router.post("/",createAddress);
module.exports = router;