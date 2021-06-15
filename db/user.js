const mongoose = require("mongoose");


const userModel = new mongoose.Schema({
    
    name: String,
    email:String,
    password: String,
    isAdmin: Boolean,
    isEnable: Boolean,
    createdDate: {type: Date, default: Date.now},
    });

module.exports = userModel;