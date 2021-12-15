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

// render a home
mainRouters.get('/', mainController.home);

//render a todo el menu
mainRouters.get('/menu', mainController.menu);

//render al carrito
mainRouters.get('/carrito', mainController.carrito);

//render a login
mainRouters.get('/createAccount', mainController.login);

//render a todo el menu que se puede editar
mainRouters.get('/editar', mainController.index);

////crea un nuevo producto
mainRouters.post('/editar', upload.single('image'),mainController.agregar);

//se elimina un producto del JSON
mainRouters.delete('/delete/:id', mainController.borrar); 

//render a un articulo en especifico
mainRouters.get('/editarProducto/:id', mainController.editando);

module.exports = mainRouters;