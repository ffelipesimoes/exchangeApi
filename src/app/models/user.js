const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  user_type: ["BUYER", "SELLER"],
  cpf: String,
  address: String,
  createdDate: { type: Date, default: Date.now },
})

module.exports = userModel
