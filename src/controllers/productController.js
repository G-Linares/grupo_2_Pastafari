
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
//ahorita estoy exportando platillos del mes por que no tengo JSON de menu completo
const platillosDelMesFilePath = path.join(__dirname, '../data/platillosDelMes.json');
const platillosDelMes = JSON.parse(fs.readFileSync(platillosDelMesFilePath, 'utf-8'));

const productController = {
    
    id: (req,res) => {     
        let id = parseInt(req.params.id);
		let product = platillosDelMes.find(platillosDelMes => platillosDelMes.id == id)
        if (id <= 0 || id > platillosDelMes.length || isNaN(id)){
            res.redirect('/');
        } else {res.render('product', {product});}
     
=======

// jala el JSON de menu Completo
const menuCompleto = path.join(__dirname, "../data/menuCompleto.json");
const menu = JSON.parse(fs.readFileSync(menuCompleto, "utf-8"));

const platillosDelMesFilePath = path.join(__dirname,"../data/platillosDelMes.json");
const platillosDelMes = JSON.parse(fs.readFileSync(platillosDelMesFilePath, "utf-8"));


const productController = {
    
    //renderiza un elemento que viene desde el menu
    id: (req,res) => {  
        const id = parseInt(req.params.id);
        if (id > menu.length || id < 0 || isNaN(id)) {
            res.render('error');
        } else {
            res.render('product',{item : menu[id -1]}); 
        }       
>>>>>>> Mercado
    },

    //lista el menu
    index: (req,res) => {
<<<<<<< HEAD
        res.render('menu',{platillosDelMes});
=======
        res.render('menu',{menu});
    },
    //renderiza el item description de un item que esta en platillos del Mes
    platilloDelMes: (req,res) =>{
        const id = parseInt(req.params.id);
        if (id > platillosDelMes.length || id < 0 || isNaN(id)) {
            res.render('error');
        } else {
            res.render('product',{item : platillosDelMes[id-1] }); 
        }  
>>>>>>> Mercado
    }
};
module.exports = productController;
