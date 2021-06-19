const express = require('express');
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require('../app/routes');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use(cors());



module.exports = app;