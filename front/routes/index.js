
const routes = require('express').Router();
//const updateUser = require("../controller/updateUser");



routes.get("/",(req,res) =>{
    res.render('pages/login')
});

routes.get("/login",(req,res) =>{
    res.render('pages/login')
});


module.exports = routes;