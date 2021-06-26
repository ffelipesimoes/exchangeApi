const mongoose = require("mongoose")

const orderModel = new mongoose.Schema({
  username: String,
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
  isAddedOnBlock: {
    type: Boolean,
    default: false
  },
  block: {
    type: Number,
    default: -1
  },
  date: { type: Date, default: Date.now },
})

module.exports = orderModel
