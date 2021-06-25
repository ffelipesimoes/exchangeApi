
module.exports = (req, res, next) => {
  const mongoose = require("mongoose")
  const connection = require("../../../src/config/dbconnection")
  const userModel = require("../models/user")
  const jwt = require("jsonwebtoken");
  const JWTSecret = "senhamuitodoida";

  const User = mongoose.model("User", userModel)

  const authToken = req.headers["authorization"];

  if (authToken != undefined) {

    const bear = authToken.split(" ")
    const token = bear[1]

    jwt.verify(token, JWTSecret, (err, data) => {
      if (err) {
        console.log(err)
        res.status(401)
        res.json({ err: "Token invalidoasdasd" })
      } else {
        req.token = token
        req.loggedUser = { username: data.username, email: data.email, tipo: data.tipo }
        console.log(data)


        next()


      }
    })
  } else {
    res.send(401)
    res.json({ err: "Token invalido" })
  }
}
