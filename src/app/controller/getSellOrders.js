module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../models/order");

    const Order = mongoose.model("Order", orderModel);

    var userLogged = req.loggedUser.username
    var userType = req.loggedUser.tipo
    
    if (userType === "SELLER") {
        res.status(403);
        res.json({ err: "Você não possui permissão para esta ação" });
    } else {
        Order.find({ type: "SELL" }).then(a => {
            //console.log(a);
            res.json(a);
        }).catch(err => {
            console.log(err);
        })
    }

}