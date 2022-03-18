const express = require('express');
const router = express.Router();

//aqui se importan los controladores
const userControllers = require("../controllers/userControllers.js");

//aui van las rutas
router.post('/', userControllers.createUser);
router.get('/', userControllers.seeUsers);

router.post('/login',userControllers.loginUser);


module.exports = router;