const express = require('express');

const productController = require('../controllers/productController');
const router = express.Router();

//init check middlewares
const guestCheck = require('../middlewares/guestCheck')
const userCheck = require('../middlewares/userCheck')
const adminCheck = require('../middlewares/adminCheck');

//init upload middleware
const upload = require("../middlewares/upload")

//se renderiza todo el menu
router.get('/menu', productController.menu);

//se lista un item para con descripciones
router.get('/menu/:id', productController.id);

//se lista un item con descripciones en la tabla del mes
router.get('/platilloDelMes/:id', productController.platilloDelMes);

//render al menu editable
router.get("/editar", userCheck, adminCheck, productController.index);
router.post("/editar", upload.single("image"), productController.agregar);

//render a un articulo en especifico
router.get("/editarProducto/:id", userCheck, adminCheck, productController.editandoProducto);
router.put("/editarProducto/:id", productController.actualizarProducto);

//se elimina un producto del JSON
router.delete("/delete/:id", userCheck, adminCheck, productController.borrar);



module.exports = router;