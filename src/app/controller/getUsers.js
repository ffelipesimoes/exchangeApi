module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const userModel = require("../models/user");

    const User = mongoose.model("User", userModel);

    User.find({}).then(a => {
        //console.log(a);
        res.json(a);
    }).catch(err => {
        console.log(err);
    })

}