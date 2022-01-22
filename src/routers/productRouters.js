const express = require('express');

const productController = require('../controllers/productController');
const router = express.Router();

//init userCheck middleware
const userCheck = require('../middlewares/userCheck')

//se implementa multer con su almacenamiento
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

//se renderiza todo el menu
router.get('/menu', productController.menu);

//se lista un item para con descripciones
router.get('/menu/:id', productController.id);

//se lista un item con descripciones en la tabla del mes
router.get('/platilloDelMes/:id', productController.platilloDelMes);

//render al menu editable
router.get("/editar", userCheck, productController.index);
router.post("/editar", upload.single("image"), productController.agregar);

//render a un articulo en especifico
router.get("/editarProducto/:id", userCheck, productController.editandoProducto);
router.put("/editarProducto/:id", productController.actualizarProducto);

//se elimina un producto del JSON
router.delete("/delete/:id", userCheck,productController.borrar);



module.exports = router;