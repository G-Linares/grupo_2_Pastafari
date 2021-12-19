const express = require("express");

const mainController = require("../controllers/mainController");

const whitelist = ['image/png', 'image/jpeg', 'image/jpg'];

const multer = require("multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/products");
  },
  filename: function (req, file, cb) {
    cb(null, `img_${file.originalname}`);
  },
});

let upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
    if (!whitelist.includes(file.mimetype)) {
      console.log("---Ejecutó el if porque no es un archivo aceptado----");
      cb(null, false);
      return cb(new Error("Tipo de archivo invalido"));
    }
    console.log("---Es un archivo aceptado y continua con las operaciones----");
    cb(null, true);
  }, });


const mainRouters = express.Router();

// render a home
mainRouters.get("/", mainController.home);

//search a algun platillo con el nombre exacto
mainRouters.get("/search", mainController.search);

//render al carrito
mainRouters.get("/carrito", mainController.carrito);

//render a login
mainRouters.get("/createAccount", mainController.login);
mainRouters.post("/createAccount", upload.single(), mainController.loginNew);




module.exports = mainRouters;
