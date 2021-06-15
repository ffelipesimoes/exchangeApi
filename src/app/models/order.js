const mongoose = require("mongoose")

const assets = ["BTC", "ETH", "ETH", "USD", "BRL"]

const orderModel = new mongoose.Schema({
  buyer_name: String,
  buyer_cpf: String,
  buyer_address: String,
  type: {
    type: String,
    enum: {
      values: ["BUY", "SELL"],
      message: "{VALUE} is not supported",
    },
  },
  asset: { type: String, enum: assets },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
})

module.exports = orderModel
