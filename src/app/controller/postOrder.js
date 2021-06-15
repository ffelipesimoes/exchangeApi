module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../../../db/order");

    const Order = mongoose.model("Order", orderModel);
    
    var { user, type, asset, amount } = req.body;

    const ordem = new Order({
        user: user,
        type: type,
        asset: asset,
        amount: amount
    });

    ordem.save().then(() => {
        console.log("Order Created");
        console.log(ordem);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    });


}