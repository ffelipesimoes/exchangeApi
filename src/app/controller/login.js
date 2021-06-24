const auth = require("./auth");


module.exports =  (req, res) => {

    const mongoose = require("mongoose")
    const connection = require("../../../src/config/dbconnection")
    const userModel = require("../models/user")

    const jwt = require("jsonwebtoken");
    const JWTSecret = "senhamuitodoida";

    const User = mongoose.model("User", userModel)

    var { email, password } = req.body;

    if (email != undefined) {

        var user = User.findOne({ email: email }, function (err, user) {
            if (user != undefined) {


                if (password == user.password) {
                    jwt.sign({ username: user.username, email: user.email, tipo: user.userType }, JWTSecret, { expiresIn: "10h" }, (err, token) => {
                        if (err) {
                            res.status(400);
                            res.json({ err: "Falha interna" });
                        } else {


                            res.status = 200;
                       

                            console.log()
                            res.json(req.loggedUser);
                            
                       


                        }
                    });

                } else {
                    res.status = 401;
                    res.json({ err: "Credenciais inválidas" });
                }


            } else {
                res.status = 404;
                res.json({ err: "Email  não existe!" });
            }

        });

    } else {
        res.status = 400;
        res.json({ err: "O email enviado é inválido" });
    }


}