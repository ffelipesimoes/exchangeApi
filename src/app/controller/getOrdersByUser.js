module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../models/order");

    const Order = mongoose.model("Order", orderModel);

    Order.find({username : req.loggedUser.username}).then(a => {
       
        res.json(a);
    }).catch(err => {
        console.log(err);
    })

}