
const express = require('express');

const productController = require('../controllers/productController');
const router = express.Router();

router.get('/:id', productController.id);

router.get('/', productController.index);

module.exports = router;