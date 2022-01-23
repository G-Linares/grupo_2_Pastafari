const express = require("express");
const mainController = require("../controllers/mainController");

const userUpload = require('../middlewares/userUpload')

const validateSU = require('../middlewares/validateSU')

//initi check middlewares
const guestCheck = require('../middlewares/guestCheck')
const userCheck = require('../middlewares/userCheck')

const mainRouters = express.Router();

// render to home
mainRouters.get("/", mainController.home);

//render to aboutUs page
mainRouters.get('/aboutUs', mainController.aboutUs);

//search products
mainRouters.get("/search", mainController.search);

//render to cart
mainRouters.get("/carrito", userCheck, mainController.carrito);

//render to sign-up
mainRouters.get("/createAccount", guestCheck, mainController.sign_up);
mainRouters.post(
  "/createAccount",
  userUpload, //still uploads image if something is wrong in validateSU
  validateSU,
  mainController.new_sign_up
);

mainRouters.post("/loginExisting", guestCheck, mainController.loginExisting);
mainRouters.get("/dashboard", mainController.dashboard);

//logs-out current user
mainRouters.get("/logout", mainController.logout);

module.exports = mainRouters;
