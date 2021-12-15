
const fs = require('fs');
const path = require('path');


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
            res.send("404 no hay articulo con ese id");
        } else {
            res.render('product',{item : menu[id - 1]}); 
        }       
    },

    //lista el menu
    index: (req,res) => {
        res.render('menu',{menu});
    },
    
    platilloDelMes: (req,res) =>{
        const id = parseInt(req.params.id);
        if (id > platillosDelMes.length || id < 0 || isNaN(id)) {
            res.send("404 no hay articulo con ese id");
        } else {
            res.render('product',{item : platillosDelMes[id - 1]}); 
        }  
    }
};
module.exports = productController;
