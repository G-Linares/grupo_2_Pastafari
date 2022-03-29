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

//eliminar un platillo
router.delete('/:dishId', menuControllers.deleteDish);

// editar un platilo, para simplicidad hago un put por cada cosa que se pueda cambiar del item
router.put('/edit/image', menuControllers.editImageDish);
router.put('/edit/name', menuControllers.editNameDish);
router.put('/edit/description', menuControllers.editDescriptionDish);
router.put('/edit/price', menuControllers.editPriceDish);

module.exports = router;