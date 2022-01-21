const express = require("express");
const mainController = require("../controllers/mainController");

const userUpload = require('../middlewares/userUpload')

const validateSU = require('../middlewares/validateSU')

const mainRouters = express.Router();

// render to home
mainRouters.get("/", mainController.home);

//render to aboutUs page
mainRouters.get('/aboutUs', mainController.aboutUs);

//search products
mainRouters.get("/search", mainController.search);

//render to cart
mainRouters.get("/carrito", mainController.carrito);

//render to sign-up
mainRouters.get("/createAccount", mainController.sign_up);
mainRouters.post(
  "/createAccount",
  userUpload, //still uploads image if something is wrong in validateSU
  validateSU,
  mainController.new_sign_up
);

mainRouters.post("/loginExisting", mainController.loginExisting);
mainRouters.get("/dashboard", mainController.dashboard);

module.exports = mainRouters;
