const mongoose = require("mongoose")
const orderModel = require("../../db/order")
const userModel = require("../../db/user")

mongoose.connect("mongodb://localhost:27017/orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const Order = mongoose.model("Order", orderModel)
const User = mongoose.model("User", userModel)

module.exports = Order
module.exports = User
