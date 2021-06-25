module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const blockModel = require("../models/block");
    const orderModel = require("../models/order");

    const Order = mongoose.model("Order", orderModel);
    const Block = mongoose.model("Block", blockModel);


    Block.find({}).then(a => {
        //console.log(a);
        res.json(a);
    }).catch(err => {
        console.log(err);
    })



}