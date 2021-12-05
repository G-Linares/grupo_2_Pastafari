
const express = require('express');

const productController = require('../controllers/productController');
const router = express.Router();

router.get('/:id', productController.id);

module.exports = router;