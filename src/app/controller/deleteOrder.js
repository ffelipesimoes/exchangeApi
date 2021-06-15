module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../../../db/order");

    const Order = mongoose.model("Order", orderModel);

    Order.findByIdAndDelete(req.params.id).then(() => {

        console.log(req.params.id + " - DELETED!");
        res.sendStatus(200);
    }).catch(err => {
        console.log("ID " + req.params.id + "NOT FOUND");
        res.sendStatus(404);
    })
}