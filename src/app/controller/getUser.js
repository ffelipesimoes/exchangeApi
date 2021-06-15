module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const userModel = require("../../../db/user");

    const User = mongoose.model("User", userModel);

    //var { email, password } = req.body;

    var email = req.params.email

    /*
    console.log(email)
    User.find({email : email}).then(a => {

       
        console.log(a);
        res.json(a);
    }).catch(err => {
        console.log(err);
    })
    */

   
    User.find({email : email}).then(a => {res.json(a);}).catch(err => {console.log(err);})

}