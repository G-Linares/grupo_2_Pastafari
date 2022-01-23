const fs = require("fs");
const path = require("path");

// jala el JSON de menu Completo
const menuCompleto = path.join(__dirname, "../data/menuCompleto.json");
const menu = JSON.parse(fs.readFileSync(menuCompleto, "utf-8"));

const platillosDelMesFilePath = path.join(
  __dirname,
  "../data/platillosDelMes.json"
);
const platillosDelMes = JSON.parse(
  fs.readFileSync(platillosDelMesFilePath, "utf-8")
);

const productController = {
  //renderiza un elemento que viene desde el menu
  id: (req, res) => {
    const id = parseInt(req.params.id);
    if (id > menu.length || id < 0 || isNaN(id)) {
      res.render("error");
    } else {
      res.render("product", { item: menu[id], user: req.session.loggedUser });
    }
  },
  //renderiza el item description de un item que esta en platillos del Mes
  platilloDelMes: (req, res) => {
    const id = parseInt(req.params.id);
    if (id > platillosDelMes.length || id < 0 || isNaN(id)) {
      res.render("error");
    } else {
      res.render("product", { item: platillosDelMes[id - 1], user: req.session.loggedUser  });
    }
  },
  //renderiza el menu
  menu: (req, res) => {
    res.render("menu", { item: menu, user: req.session.loggedUser  });
  },
  //renderiza vista para editar artículos
  index: (req, res) => {
    res.render("productosPorEditar", { productos: menu, user: req.session.loggedUser  });
  },
  //procesa la edición de artículos
  agregar: (req, res) => {
    let newProduct = {
      id: menu.length + 1,
      ...req.body,
      image: req.file.filename,
    };
    //solo estan para ver que se han creado
    console.log(newProduct);
    menu.push(newProduct);

    fs.writeFileSync(menuCompleto, JSON.stringify(menu, null, " "));
    res.redirect("/producto/editar");
  },
  editandoProducto: (req, res) => {
    const id = parseInt(req.params.id);
    //mejor ocupo metodo find para encontrar el item que tenga el mismo ID
    let productToEdit = menu.find((product) => product.id == id);
    if (!productToEdit) {
      res.render("error");
    } else {
      res.render("editarProducto", { productToEdit, user: req.session.loggedUser });
    }
  },
  actualizarProducto: (req, res) => {
    let id = req.params.id;
    let productToEdit = menu.find((product) => product.id == id);

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: productToEdit.image,
    };

    let newProducts = menu.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(menuCompleto, JSON.stringify(newProducts, null, " "));
    return res.redirect("/"); //el redirect es más rápido que el sessión al parecer y esto termina la session activa o no he configurado cookies
  },
  borrar: (req, res) => {
    let id = req.params.id;
    let productoBorrado = menu.filter((menu) => menu.id == id);
    let imageToEliminate = productoBorrado[0].image;
    let uploadPath = path.join(__dirname, '../../public/img/products/');
    let erasePath = uploadPath+imageToEliminate;
    fs.unlinkSync(erasePath);
    let finalProducts = menu.filter((menu) => menu.id != id);
    fs.writeFileSync(menuCompleto, JSON.stringify(finalProducts, null, " "));
    //no puedo mandar a /editar por que se tiene que dar refresh a la pagina para que se vean los cambios.
    res.redirect("/");
  },
};
module.exports = productController;
