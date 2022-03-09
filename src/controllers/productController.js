const fs = require("fs");
const path = require("path");

//require database to work
let db = require("../../database/models");

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
      res.render("product", {
        item: platillosDelMes[id - 1],
        user: req.session.loggedUser,
      });
    }
  },
  //renderiza el menu
  menu: (req, res) => {
    db.Menu.findAll()
      .then(function (menuView) {
        res.render("menu", { item: menuView, user: req.session.loggedUser });
      })
      .catch(function (error) {
        console.log(error);
        res.redirect("/");
      });
  },
  //renderiza vista para editar artículos
  index: (req, res) => {
    db.Menu.findAll().then(function (menuView) {
      res.render("productosPorEditar", {
        productos: menuView,
        user: req.session.loggedUser,
      });
    });
  },
  //procesa la edición de artículos
  agregar: (req, res) => {
    const {
      item,
      type,
      dish,
      description,
      score,
      discount,
      boughts,
      price,
      isTopPlate,
    } = req.body;
    const image = req.file.filename;
    db.Menu.create({
      item,
      type,
      dish,
      description,
      image,
      score,
      discount,
      boughts,
      price,
      isTopPlate,
    });
    res.redirect("/producto/editar");
  },
  editandoProducto: (req, res) => {
    const id = parseInt(req.params.id);
    //mejor ocupo metodo find para encontrar el item que tenga el mismo ID
    let productToEdit = menu.find((product) => product.id == id);
    if (!productToEdit) {
      res.render("error");
    } else {
      res.render("editarProducto", {
        productToEdit,
        user: req.session.loggedUser,
      });
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
  borrar: async (req, res) => {
    const id = req.params.id;
    const imgName = await db.Menu.findByPk(id);

    let img = imgName.dataValues.image;
    console.log(img);
    let uploadPath = path.join(__dirname, "../../public/img/products/");
    let erasePath = uploadPath + img;
    fs.unlinkSync(erasePath);

    db.Menu.destroy ({
      where: {id: id}
    }).then(res.redirect("/"));
  },
};
module.exports = productController;
