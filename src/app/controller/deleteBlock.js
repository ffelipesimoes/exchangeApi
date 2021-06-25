module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const blockModel = require("../models/block");

    const Block = mongoose.model("Block", blockModel);

  
    Block.findByIdAndDelete(req.params.id).then(() => {

        console.log(req.params.id + " - DELETED!");
        res.sendStatus(200);
    }).catch(err => {
        console.log("ID " + req.params.id + "NOT FOUND");
        res.sendStatus(404);
    })

}