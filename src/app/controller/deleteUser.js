module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const userModel = require("../../../db/user");

    const User = mongoose.model("User", userModel);

    User.findByIdAndDelete(req.params.id).then(() => {

        console.log(req.params.id + " - DELETED!");
        res.sendStatus(200);
    }).catch(err => {
        console.log("ID " + req.params.id + "NOT FOUND");
        res.sendStatus(404);
    })
}