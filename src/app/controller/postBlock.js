
module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const blockModel = require("../models/block");
    const orderModel = require("../models/order");
    var crypto = require('crypto');

    const Order = mongoose.model("Order", orderModel);
    const Block = mongoose.model("Block", blockModel);

    var ordersToBlock = Order.find({}, null, { limit: 3 }).then(blocksToAdd => {
        
        var hash = crypto.createHash('sha256').update(blocksToAdd.toString()).digest('hex');
        console.log(hash); // 9b74c9897bac770ffc029102a200c5de
        const bloco = new Block({
            transactions: blocksToAdd,
            hash: hash

        });


        

        bloco.save().then(() => {
            console.log("Block Created");
            console.log(bloco);
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
        });
        //res.json(blocksToAdd);
    }).catch(err => {
        console.log(err);
    })



}