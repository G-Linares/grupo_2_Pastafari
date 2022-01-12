const express = require("express");
const mainController = require("../controllers/mainController");

const whitelist = ["image/png", "image/jpeg", "image/jpg"];

const multer = require("multer");
let userstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/users");
  },
  filename: function (req, file, cb) {
    cb(null, `${req.body.username}_img_${file.originalname}`);
  },
});
//init upload
const maxSize = 1000000; //1MB (mb * bt)
let userupload = multer({
  storage: userstorage,
  fileFilter: (req, file, cb) => {
    if (!whitelist.includes(file.mimetype)) {
      console.log("---Ejecutó el if porque no es un tipo de archivo aceptado----");
      cb(null, false);
      return cb(new Error("Tipo de imagen invalida, necesitas PNG, JPEG o JPG"));
    }
    console.log("---Es un archivo aceptado y continua con las operaciones----");
    cb(null, true);
  },
  limits: { fileSize: maxSize }
}).single('img');

const { body } = require("express-validator");

const validateSU = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nombre no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Nombre debe tener al menos 3 caractéres"),
  body("lastname")
    .trim()
    .notEmpty()
    .withMessage("Apellido no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Apellido debe tener al menos 3 caractéres"),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Usuario no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Usuario debe tener al menos 3 caractéres"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email no puede estar vacio")
    .isEmail()
    .withMessage("Inserta un email valido"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password no puede estar vacio")
    .isLength({ min: 6 })
    .withMessage("Password debe tener al menos 6 caractéres"),
]; //this could go into a middleware module?

const mainRouters = express.Router();

// render to home
mainRouters.get("/", mainController.home);

//this search is still unfinished
mainRouters.get("/search", mainController.search);

//render to cart
mainRouters.get("/carrito", mainController.carrito);

//render to sign-up
mainRouters.get("/createAccount", mainController.sign_up);
mainRouters.post(
  "/createAccount",
  userupload, //still uploads image if something is wrong in validateSU
  validateSU,
  mainController.new_sign_up
);

mainRouters.post("/loginExisting", mainController.loginExisting);
mainRouters.get("/dashboard", mainController.dashboard);

module.exports = mainRouters;
