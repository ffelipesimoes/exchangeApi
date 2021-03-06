
module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../models/order");

    const Order = mongoose.model("Order", orderModel);
    
    var { type, amount, price, description } = req.body;
    var username = req.loggedUser.username
    
    const ordem = new Order({
        username: username,
        type: type,
        amount: amount,
        price: price,
        description : description
    });

    ordem.save().then(() => {
        console.log("Order Created");
        console.log(ordem);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    });


}