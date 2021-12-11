
const fs = require('fs');
const path = require('path');


const menu = require('../data/menuCompleto');

//ahorita estoy exportando platillos del mes por que no tengo JSON de menu completo
const platillosDelMesFilePath = path.join(__dirname, '../data/menuCompleto2.json');
const platillosDelMes = JSON.parse(fs.readFileSync(platillosDelMesFilePath, 'utf-8'));

const productController = {
    
    id: (req,res) => {     
        const id = parseInt(req.params.id);
        res.render('product',{item : platillosDelMes[id- 1]});     
    },
    index: (req,res) => {
        res.render('menu',{menu});
    }
};
module.exports = productController;
