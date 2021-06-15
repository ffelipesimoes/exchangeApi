const mongoose = require("mongoose")
const orderModel = require("../../src/app/models/order")
const userModel = require("../../src/app/models/user")

mongoose.connect("mongodb://localhost:27017/orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () =>{
  console.log("Conectado ao banco de dados!");
});

mongoose.connection.on('error', (err) =>{
  console.log("Erro na conexão: " + err);
});

mongoose.connection.on('disconnect', () =>{
  console.log("Desconectado :");
});



const Order = mongoose.model("Order", orderModel)
const User = mongoose.model("User", userModel)

module.exports = Order
module.exports = User

