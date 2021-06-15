module.exports = (req, res) => {
  const mongoose = require("mongoose")
  const connection = require("../../../src/config/dbconnection")
  const userModel = require("../../../db/user")

  const User = mongoose.model("User", userModel)

  var { name, email, password, address, cpf, user_type } = req.body

  //** Verificação se já existe usuário */
  const existingUser = User.findOne({ email: email })
  console.log(existingUser)
  if (existingUser) {
    const err = new Error("E-mail já existe")
    err.statusCode = 422
    throw err
  }

  const usuario = new User({
    name: name,
    email: email,
    password: password,
    address: address,
    cpf: cpf,
    user_type: user_type,
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
    })
}
