module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../../../db/order");

    const Order = mongoose.model("Order", orderModel);

    Order.find({}).then(a => {
        //console.log(a);
        res.json(a);
    }).catch(err => {
        console.log(err);
    })

}