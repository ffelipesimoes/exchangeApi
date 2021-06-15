module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection");
    const userModel = require("../../../db/user");

    const User = mongoose.model("User", userModel);

   
    var { name, email, password } = req.body;

    User.findByIdAndUpdate(req.params.id, {
        name: name,
        email: email,
        password: password
        
    }).then(() => {

        console.log(req.params.id + " - UPDATED!");
        res.sendStatus(200);
    }).catch(err => {
        console.log("ID " + req.params.id + "NOT FOUND");
        res.sendStatus(404);
    })
}