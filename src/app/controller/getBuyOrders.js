
module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../models/order");

    const Order = mongoose.model("Order", orderModel);

    Order.find({type : "BUY"}).then(a => {
        //console.log(a);
        res.json(a);
    }).catch(err => {
        console.log(err);
    })

}