const express = require('express');
const router = express.Router();
const { validateToken } = require('../middleware/AuthMiddleware');

//aqui se importan los controladores
const menuControllers = require("../controllers/menuControllers.js");

//aui van las rutas
router.get('/', menuControllers.index);
router.post('/', validateToken, menuControllers.indexMenu);

//agarro info de base de datos de un item
router.get('/byId/:id', menuControllers.singleDish);

module.exports = router;