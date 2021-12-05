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
    registro: (req,res) => {
        res.render('registro')
    },
    login: (req,res) => {
        res.render('createAccount')
    },
};

module.exports = mainController;