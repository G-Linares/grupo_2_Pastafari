const express = require('express');
const router = express.Router();

//aqui se importan los controladores
const userControllers = require("../controllers/userControllers.js");
// importo middleware de validacion
const { validateToken } = require('../middleware/AuthMiddleware');

//aui van las rutas
router.post('/', userControllers.createUser);
router.get('/', userControllers.seeUsers);

router.post('/login',userControllers.loginUser);

//autentica si esta logeado
router.get('/auth', validateToken, userControllers.auth);

router.get('/profile/:id', userControllers.profile);


module.exports = router;