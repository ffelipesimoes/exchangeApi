module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection");
    const orderModel = require("../models/order");

    const Order = mongoose.model("Order", orderModel);

   
    var { type, amount, price, description } = req.body;
    var username = req.loggedUser.username

    Order.findByIdAndUpdate(req.params.id, {
        username: username,
        type: type,
        amount: amount,
        price: price,
        description : description


    }).then(() => {

        console.log(req.params.id + " - UPDATED!");
        res.sendStatus(200);
    }).catch(err => {
        console.log("ID " + req.params.id + "NOT FOUND");
        res.sendStatus(404);
    })
}