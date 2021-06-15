module.exports = (req, res) => {
  const mongoose = require("mongoose")
  const connection = require("../../../src/config/dbconnection")
  const userModel = require("../models/user")

  const User = mongoose.model("User", userModel)

var { username,password, email, cpf, address, userType  } = req.body

  const usuario = new User({
    username: username,
    password: password,
    email: email,
    cpf: cpf,
    address: address,
    userType: userType
  })

  usuario
    .save()
    .then(() => {
      console.log("User Created")
      console.log(usuario)
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(406);
    })
    
}
