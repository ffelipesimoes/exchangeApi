const express = require('express');
const web = express();
var path = require('path');

web.use(express.static("public"));
web.set('view engine', 'ejs');

const cors = require("cors");
const bodyParser = require("body-parser");


const routes = require('../routes');


web.use(bodyParser.urlencoded({ extended: false }));
web.use(bodyParser.json());

web.use('/', routes);



web.use(cors());

module.exports = web;