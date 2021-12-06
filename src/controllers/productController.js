
const menu = require('../data/menuCompleto');

const productController = {
    
    id: (req,res) => {
        
        const id = parseInt(req.params.id);
        
        if(id >= menu.length || id < 0 || isNaN(id)){
            res.render('productIndex',{menu});
        } else {
            res.render('product',{item:menu[id]});
        }
       
    },
    index: (req,res) => {
        res.render('productIndex',{menu});
    }
};
module.exports = productController;