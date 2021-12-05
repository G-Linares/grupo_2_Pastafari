
const menu = require('../data/menuCompleto');

const productController = {
    
 id: (req,res) => {
    const id = req.params.id;
    res.render('product',{item:menu[id]});
    },
};
module.exports = productController;