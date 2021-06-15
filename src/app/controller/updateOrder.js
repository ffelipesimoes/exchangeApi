module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection");
    const orderModel = require("../../../db/order");

    const Order = mongoose.model("Order", orderModel);

   
    var { user, type, asset, amount } = req.body;

    Order.findByIdAndUpdate(req.params.id, {
        user: user,
        type: type,
        asset: asset,
        amount: amount,


    }).then(() => {

        console.log(req.params.id + " - UPDATED!");
        res.sendStatus(200);
    }).catch(err => {
        console.log("ID " + req.params.id + "NOT FOUND");
        res.sendStatus(404);
    })
}