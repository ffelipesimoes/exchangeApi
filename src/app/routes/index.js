
const routes = require('express').Router();

const getOrders = require("../controller/getOrders");
const postOrder = require("../controller/postOrder");
const deleteOrder = require("../controller/deleteOrder");
const updateOrder = require("../controller/updateOrder");


const postUser = require("../controller/postUser");
const getUser = require("../controller/getUser");
const getUsers = require("../controller/getUsers");
const deleteUser = require("../controller/deleteUser");
const updateUser = require("../controller/updateUser");

const auth = require("../controller/auth");


routes.get("/orders",getOrders);
routes.post("/order",postOrder);
routes.delete("/order/:id",deleteOrder);
routes.put("/order/:id",updateOrder);

routes.get("/users",getUsers);
routes.get("/user/:email",getUser);
routes.post("/user",postUser);
routes.delete("/user/:id",deleteUser);
routes.put("/user/:id",updateUser);

routes.post("/auth",auth);


module.exports = routes;