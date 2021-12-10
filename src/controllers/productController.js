
const fs = require('fs');
const path = require('path');

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
     
    },
    index: (req,res) => {
        res.render('menu',{platillosDelMes});
    }
};
module.exports = productController;
