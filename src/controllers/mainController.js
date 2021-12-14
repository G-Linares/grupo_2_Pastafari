const fs = require('fs');
const path = require('path');

const menuCompleto2 = path.join(__dirname, '../data/menuCompleto2.json');
const menu = JSON.parse(fs.readFileSync(menuCompleto2, 'utf-8'));

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
      
        res.render('menu', {item: menu});
    },
    carrito: (req,res) => {
        res.render('carrito',{item: menu});
    },
    login: (req,res) => {
        res.render('createAccount')
    },
    editar: (req,res) => {
        res.render('editarProductos', {productos: menu});
    },
    editando: (req,res) => {  
        const iden = parseInt(req.params.id);
        if(iden > menu.length || iden < 0 || isNaN(iden)){
            res.send('404 no hay articulo con ese id');
        } else {
            res.render('vistaEditar',{productos: menu, iden: iden});
        }
    },
    destroy : (req, res) => {
		let id = req.params.id;
        console.log(id);
		let finalProducts = menu.filter(menu => menu.id != id);
        console.log('finalProducts');

		fs.writeFileSync(menuCompleto2, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');

	}
    
};

module.exports = mainController;