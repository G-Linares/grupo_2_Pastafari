const express = require('express');
const router = express.Router();

//aqui se importan los controladores
const mainControllers = require("../controllers/mainControllers.js");

//aui van las rutas
router.get('/', mainControllers.index);
router.post('/', mainControllers.indexMenu);

module.exports = router;