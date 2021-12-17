const fs = require("fs");
const path = require("path");

// jala el JSON de menu Completo
const menuCompleto = path.join(__dirname, "../data/menuCompleto.json");
const menu = JSON.parse(fs.readFileSync(menuCompleto, "utf-8"));

// Jala el JSON de los reviews
const reviewsFilePath = path.join(__dirname, "../data/reviews.json");
const reviews = JSON.parse(fs.readFileSync(reviewsFilePath, "utf-8"));

//jala el JSON de las platillos Del mes
const platillosDelMesFilePath = path.join(__dirname,"../data/platillosDelMes.json");
const platillosDelMes = JSON.parse(fs.readFileSync(platillosDelMesFilePath, "utf-8"));

//jala el JSON de usuarios
const usersPath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

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
    const id = parseInt(req.params.id);
    //mejor ocupo metodo find para encontrar el item que tenga el mismo ID
    let productToEdit = menu.find(product => product.id == id);
    if (!productToEdit) {
      res.render('error');
    } else {
      res.render("editarProducto", { productToEdit });
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
    let newProduct = {
      id: menu.length+1,
      ...req.body,
      image: req.file.filename
    };
    //soplo estan para ver que se han creado
    console.log(newProduct);
    menu.push(newProduct);

    fs.writeFileSync(menuCompleto, JSON.stringify(menu, null, ' '));
    res.redirect('/editar');
  },

  loginNew: (req,res) => {
        // ingresa un nuevo usuario al JSON de usuarios   
        let newUser = {
            id: users.length+1,
            ...req.body,
            img:"No-tenemos-profile-pics.png"
          };
          users.push(newUser);
          fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
          res.redirect('/');
  },
  search : (req, res) => {
    let search = req.query.keywords;
    // recibe un string en la barra de busqueda y hace un filter para encontrar que objeto tiene ese mismo nombre
    let productsToSearch = menu.filter(menu => menu.item == search);	
    //si hay un match manda la info de ese objeto
    if (productsToSearch == ""){
        res.render('error');
    } else{
      // la neta no se por que se manda toThousand pero ahi esta
      res.render('product', {item : productsToSearch[0],search,toThousand,})
    }
  },
  update: (req, res) => {
		let id = req.params.id;
		let productToEdit = menu.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
      image: productToEdit.image,
		};
		
		let newProducts = menu.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		});

		fs.writeFileSync(menuCompleto, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	}
};

module.exports = mainController;