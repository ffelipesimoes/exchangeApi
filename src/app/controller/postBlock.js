
module.exports = (req, res) => {

    const mongoose = require("mongoose");
    const connection = require("../../../src/config/dbconnection")
    const blockModel = require("../models/block");
    const orderModel = require("../models/order");
    var crypto = require('crypto');

    const Order = mongoose.model("Order", orderModel);
    const Block = mongoose.model("Block", blockModel);

    //Seleciona transações para colocar no bloco
    Order.find({isAddedOnBlock: false}, null, { limit: 3 }).then(blocksToAdd => {

        var hash = crypto.createHash('sha256').update(blocksToAdd.toString()).digest('hex');
        //console.log(hash);
        const bloco = new Block({
            transactions: blocksToAdd,
            hash: hash
        });
        let lastBlock = 0;
        Block.find().sort({ _id: -1 }).limit(1).then(a => {
            lastBlock = a[0]['_id']
            lastBlock++
            blocksToAdd.forEach(key => {

                Order.findByIdAndUpdate(key['_id'], {
                    isAddedOnBlock: true,
                    block: lastBlock
                }).then(() => {

                    console.log(key['_id'] + "Added on Block");

                }).catch(err => {
                    console.log(key['_id'] + "--------->> Error");

                })
            })

        }).catch(err => {
            console.log(err);
        })
  

        //Executa o POST do bloco

        bloco.save().then(() => {
            console.log("Block Created");
            console.log(bloco);

            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
        });

    }).catch(err => {
        console.log(err);
    })

}