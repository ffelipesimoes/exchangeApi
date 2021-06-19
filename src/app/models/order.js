const mongoose = require("mongoose")

const orderModel = new mongoose.Schema({
  user: String,
  type: {
    type: String,
    enum: {
      values: ["BUY", "SELL"],
      message: "{VALUE} is not supported",
    },
  },
  
  amount: { type: Number },
  price: { type: Number },
  description: String,
  date: { type: Date, default: Date.now },
})

module.exports = orderModel
