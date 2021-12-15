const fs = require("fs");
const path = require("path");

// jala el JSON de menu Completo
const menuCompleto = path.join(__dirname, "../data/menuCompleto.json");
const menu = JSON.parse(fs.readFileSync(menuCompleto, "utf-8"));

// Jala el JSON de los reviews
const reviewsFilePath = path.join(__dirname, "../data/reviews.json");
const reviews = JSON.parse(fs.readFileSync(reviewsFilePath, "utf-8"));

//jala el JSON de las reviews
const platillosDelMesFilePath = path.join(__dirname,"../data/platillosDelMes.json");
const platillosDelMes = JSON.parse(fs.readFileSync(platillosDelMesFilePath, "utf-8"));

//podemos ocuparlo despues para validar el string que entra
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  home: (req, res) => {
    res.render("home", { platillosDelMes, reviews });
  },
  menu: (req, res) => {
    res.render("menu", { item: menu });
  },
  carrito: (req, res) => {
    res.render("carrito", { item: menu });
  },
  login: (req, res) => {
    res.render("createAccount");
  },
  index: (req, res) => {
    res.render("productosPorEditar", { productos: menu });
  },
  editando: (req, res) => {
    const iden = parseInt(req.params.id);
    if (iden > menu.length || iden < 0 || isNaN(iden)) {
      res.send("404 no hay articulo con ese id");
    } else {
      res.render("editarProducto", { productos: menu, iden: iden -1 });
    }
  },
  borrar : (req, res) => {   
		let id = req.params.id;    
		let finalProducts = menu.filter(menu => menu.id != id);
		fs.writeFileSync(menuCompleto, JSON.stringify(finalProducts, null, ' '));
    //no puedo mandar a /editar por que se tiene que dar refresh a la pagina para que se vean los cambios.
		res.redirect('/');

	},
  agregar: (req,res) => {
    console.log(req.body);
    console.log(req.file);
    console.log(req.file.originalname);
        let newProduct = {
            id: menu.length+1,
            ...req.body,
            image: req.file.filename
          };
          console.log(newProduct);
          menu.push(newProduct);
          fs.writeFileSync(menuCompleto, JSON.stringify(menu, null, ' '));
          res.redirect('/editar');
  }
};

module.exports = mainController;
