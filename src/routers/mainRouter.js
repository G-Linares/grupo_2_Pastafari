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
<<<<<<< HEAD
mainRouters.get('/search',mainController.search);

mainRouters.get('/menu', mainController.menu);

mainRouters.get('/carrito', mainController.carrito);

mainRouters.get('/createAccount', mainController.login);

mainRouters.get('/editar', mainController.editar);
mainRouters.get('/editar/:id?', mainController.editando);
=======

//render a todo el menu
mainRouters.get('/menu', mainController.menu);

//render al carrito
mainRouters.get('/carrito', mainController.carrito);

//render a login
mainRouters.get('/createAccount', mainController.login);
mainRouters.post('/createAccount',upload.single(),mainController.loginNew);

//render a todo el menu que se puede editar
mainRouters.get('/editar', mainController.index);
mainRouters.post('/editar', upload.single('image'),mainController.agregar);

//se elimina un producto del JSON
mainRouters.delete('/delete/:id', mainController.borrar); 

//render a un articulo en especifico
mainRouters.get('/editarProducto/:id', mainController.editando);
>>>>>>> Mercado

module.exports = mainRouters;