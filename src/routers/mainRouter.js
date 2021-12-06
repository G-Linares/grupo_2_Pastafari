const express = require('express');

const mainController = require('../controllers/mainController')

const mainRouters = express.Router();

mainRouters.get('/', mainController.home);
mainRouters.get('/menu', mainController.menu);
mainRouters.get('/carrito', mainController.carrito);
mainRouters.get('/createAccount', mainController.login);
mainRouters.get('/editar', mainController.editar);
mainRouters.get('/editarProducto/:id?', mainController.editando);

module.exports = mainRouters;