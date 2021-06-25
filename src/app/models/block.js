const mongoose = require("mongoose")

Schema = mongoose.Schema, autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/orders");

autoIncrement.initialize(connection);

const blockModel = new mongoose.Schema({
  id: { type: Schema.Types.ObjectId, ref: 'ID' },
  transactions: [Array],
  CreatedOn: { type: Date, default: Date.now },
  hash: String,
});

blockModel.plugin(autoIncrement.plugin, 'Block');
var Block = connection.model('Block', blockModel);

module.exports = blockModel
