const express = require("express");
const mainController = require("../controllers/mainController");

const whitelist = ['image/png', 'image/jpeg', 'image/jpg'];

const multer = require("multer");
let userstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/users");
  },
  filename: function (req, file, cb) {
    cb(null, `_img_${file.originalname}`);
  },
});

let userupload = multer({ storage: userstorage, fileFilter: (req, file, cb) => {
  if (!whitelist.includes(file.mimetype)) {
    console.log("---Ejecutó el if porque no es un archivo aceptado----");
    cb(null, false);
    return cb(new Error("Tipo de archivo invalido"));
  }
  console.log("---Es un archivo aceptado y continua con las operaciones----");
  cb(null, true);
}, });


const mainRouters = express.Router();

// render to home
mainRouters.get("/", mainController.home);

//this search is still unfinished
mainRouters.get("/search", mainController.search);

//render to cart
mainRouters.get("/carrito", mainController.carrito);

//render to sign-up
mainRouters.get("/createAccount", mainController.sign_up);
mainRouters.post("/createAccount", userupload.single("img"), mainController.new_sign_up);




module.exports = mainRouters;
