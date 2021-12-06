const platillos = require('../data/platillos');
const reviews = require('../data/reviews');
const menu = require('../data/menuCompleto');


const mainController = {
    home: (req,res) => {
        res.render('home', {platillos, reviews});
    },
    menu: (req,res) => {
      
        res.render('menu', {menu});
    },
    carrito: (req,res) => {
        res.render('carrito',{platillos});
    },
    login: (req,res) => {
        res.render('createAccount')
    },
    editar: (req,res) => {
        res.render('editarProductos', {productos: platillos});
    },
    editando: (req,res) => {  
        const iden = parseInt(req.params.id);
        if(iden > platillos.length || iden < 0 || isNaN(iden)){
            res.send('404 no hay articulo con ese id');
        } else {
            res.render('vistaEditar',{productos: platillos, iden: iden});
        }
    }
   
};

module.exports = mainController;