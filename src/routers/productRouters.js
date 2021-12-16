const express = require('express');

const productController = require('../controllers/productController');
const router = express.Router();

//se listan el menu, vista usuarios
router.get('/', productController.index);

//se lista un item para con descripciones
router.get('/:id', productController.id);

//se lista un item con descripciones en la tabla del mes
router.get('/platilloDelMes/:id', productController.platilloDelMes)

module.exports = router;