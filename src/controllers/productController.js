
const menu = require('../data/menuCompleto');

const productController = {
    
    id: (req,res) => {

        const id = req.params.id;
        const lenghtmenu = menu.length;
       
        if(req.params.id > menu.length){
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