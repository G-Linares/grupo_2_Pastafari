const fs = require('fs');
const path = require('path');

const menu = require('../data/menuCompleto');

const reviewsFilePath = path.join(__dirname, '../data/reviews.json');
const reviews = JSON.parse(fs.readFileSync(reviewsFilePath, 'utf-8'));

const platillosDelMesFilePath = path.join(__dirname, '../data/platillosDelMes.json');
const platillosDelMes = JSON.parse(fs.readFileSync(platillosDelMesFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const mainController = {
    home: (req,res) => {
        res.render('home', {platillosDelMes, reviews});
    },
    menu: (req,res) => {
      
        res.render('menu', {menu});
    },
    carrito: (req,res) => {
        res.render('carrito',{platillosDelMes});
    },
    login: (req,res) => {
        res.render('createAccount')
    },
    editar: (req,res) => {
        res.render('editarProductos', {productos: platillosDelMes});
    },
    editando: (req,res) => {  
        const iden = parseInt(req.params.id);
        if(iden > platillosDelMes.length || iden < 0 || isNaN(iden)){
            res.send('404 no hay articulo con ese id');
        } else {
            res.render('vistaEditar',{productos: platillosDelMes, iden: iden});
        }
    }
   
};

module.exports = mainController;