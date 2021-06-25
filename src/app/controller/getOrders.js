module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const orderModel = require("../models/order");

    const Order = mongoose.model("Order", orderModel);

    Order.find({}).then(a => {
        //console.log(a);
        res.json(a);
    }).catch(err => {
        console.log(err);
    })

    Order.count({}, function( err, count){
        console.log( "Numero de transações: ", count );
        if(count >= 10 ){
            console.log("Ta na hora de zerar o contador");
        }else{
            console.log("Segue o baile");


        }
    })

}