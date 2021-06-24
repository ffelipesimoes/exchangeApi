
const routes = require('express').Router();

const getOrders = require("../controller/getOrders");
const postOrder = require("../controller/postOrder");
const deleteOrder = require("../controller/deleteOrder");
const updateOrder = require("../controller/updateOrder");

const getBuyOrders = require("../controller/getBuyOrders");
const getSellOrders = require("../controller/getSellOrders");
const getOrdersByUser = require("../controller/getOrdersByUser")


const postUser = require("../controller/postUser");
const getUser = require("../controller/getUser");
const getUsers = require("../controller/getUsers");
const deleteUser = require("../controller/deleteUser");
const updateUser = require("../controller/updateUser");

const login = require("../controller/login");
const auth = require("../controller/auth");



routes.get("/orders",getOrders);
routes.post("/order",postOrder);
routes.delete("/order/:id",deleteOrder);
routes.put("/order/:id",updateOrder);
routes.get("/orders/buyorders", getBuyOrders);
routes.get("/orders/sellorders", getSellOrders);
routes.get("/orders/myOrders",auth, getOrdersByUser);

routes.get("/users",getUsers);
routes.get("/user/:email",getUser);
routes.post("/user",postUser);
routes.delete("/user/:id",deleteUser);
routes.put("/user/:id",updateUser);

routes.post("/login",auth, login);




module.exports = routes;