const express = require('express');

const mainController = require('../controllers/mainController')

const multer = require('multer');

let storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
    cb(null, 'public/img/')
}, 
filename: function (req, file, cb) {
    cb(null, `img_${file.originalname}`)
}
});
let upload = multer({storage:storage})

const mainRouters = express.Router();

mainRouters.get('/', mainController.home);
mainRouters.get('/menu', mainController.menu);
mainRouters.get('/carrito', mainController.carrito);
mainRouters.get('/createAccount', mainController.login);

mainRouters.get('/editar', mainController.editar);
mainRouters.post('/editar', upload.single('image'),mainController.agregar);
mainRouters.delete('/editar/:id', mainController.borrar);

mainRouters.get('/editarProducto/:id?', mainController.editando);

module.exports = mainRouters;