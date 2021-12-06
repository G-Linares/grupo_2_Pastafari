
const menu = require('../data/menuCompleto');
const platillos = require('../data/platillos');

const productController = {
    
    id: (req,res) => {
        
        const id = parseInt(req.params.id);
        
        if(id >= platillos.length || id < 0 || isNaN(id)){
            res.render('productIndex',{menu});
        } else {
            res.render('product',{item:platillos[id]});
        }
       
    },
    index: (req,res) => {
        res.render('productIndex',{menu});
    }
};
module.exports = productController;