const express = require('express');

const mainController = require('../controllers/mainController')

const mainRouters = express.Router();

mainRouters.get('/', mainController.home);
mainRouters.get('/menu', mainController.menu);
mainRouters.get('/carrito', mainController.carrito);
mainRouters.get('/registro', mainController.registro);
mainRouters.get('/createAccount', mainController.login);

module.exports = mainRouters;