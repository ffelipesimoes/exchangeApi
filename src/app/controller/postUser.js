module.exports = (req, res) => {
    
    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection");
    const userModel = require("../../../db/user");

    const User = mongoose.model("User", userModel);
    
    var { name, email, password } = req.body;

    const usuario = new User({
        name: name,
        email: email,
        password: password
    });

    usuario.save().then(() => {
        console.log("User Created");
        console.log(usuario);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    });


}