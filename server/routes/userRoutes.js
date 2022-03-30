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

router.put('/edit/username', userControllers.editUsernameUser);
router.put('/edit/name', userControllers.editNameUser);
router.put('/edit/last_name', userControllers.editLastNameUser);
router.put('/edit/email', userControllers.editEmailUser);
// router.put('/edit/password', userControllers.editPasswordUser);
router.put('/edit/type', userControllers.editTypeUser);


module.exports = router;