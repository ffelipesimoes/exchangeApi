const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

const userModel = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, "Nome não pode ser vazio"],
    match: [/^[a-zA-Z0-9]+$/, 'Caracteres inválidos'],
    unique: true,
    index: true
},

password: {
    type: String,
    required: true
},

email: {
    type: String,
    lowercase: true,
    required: [true, " email não pode ser vazio"],
    match: [/\S+@\S+\.\S+/, 'Caracteres inválidos'],
    unique: true,
    index: true
},

cpf: {
    type: String,
    minLength: [11, "Preencha o CPF corretamente"],
    maxLength: [11, "Preencha o CPF corretamente"],
    unique: true,
    required: true
},
address: {
    type: String,
    required: true
},

userType: {
    type: String,
    enum: {
        values: ["BUYER", "SELLER"],
        message: "{VALUE} não suportado!",
    },
},
}, { timestamps: true });

userModel.plugin(uniqueValidator, { message: 'Usuário ou email já cadastrado' });



module.exports = userModel
