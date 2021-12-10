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
        res.render('menu', {platillosDelMes});
    },
    search : (req, res) => {
        let search = req.query.keywords;
        // recibe un string en la barra de busqueda y hace un filter para encontrar que objeto tiene ese mismo nombre
		let productsToSearch = platillosDelMes.filter(platillosDelMes => platillosDelMes.item == search);	
        //si hay un match manda la info de ese objeto
        if (productsToSearch == ""){
            res.redirect('/');
        } else {res.render('product', { 
			item : productsToSearch[0], 
			search,
			toThousand,
		});}
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
        // const iden = parseInt(req.params.id);
        let id = parseInt(req.params.id);
        //utilizo el metodo con find para encontrar el id de parametro en el objeto
		let product = platillosDelMes.find(platillosDelMes => platillosDelMes.id == id)
        //se puede renderizar mandando el parametro {product : platillosDelMes[id -1]} tambien
        if (id <= 0 || id > platillosDelMes.length || isNaN(id)){
            res.redirect('/editar');
        } else {res.render('vistaEditar', {product});}
    }
};

module.exports = mainController;