const express = require('express');
const router = express.Router();

//aqui se importan los controladores
const userControllers = require("../controllers/userControllers.js");

//aui van las rutas
router.get('/', userControllers.users);
router.post('/', userControllers.indexUsers);

module.exports = router;