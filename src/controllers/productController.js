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

    db.Menu.findByPk(id).then((resultado) => {
      console.log(resultado);
      if (id < 0 || isNaN(id)) {
        return res.render("Error");
      } else {
        return res.render("product", {
          item: resultado.dataValues,
          user: req.session.loggedUser,
        });
      }
    });
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
  editandoProducto: async (req, res) => {
    const id = parseInt(req.params.id);

    let productToEdit = await db.Menu.findByPk(id);

    if (!productToEdit) {
      res.render("error");
    } else {
      res.render("editarProducto", {
        productToEdit,
        user: req.session.loggedUser,
      });
    }
  },
  actualizarProducto: async (req, res) => {
    let id = req.params.id;
    let productToEdit = await db.Menu.findByPk(id);
    let newImg = req.file.filename;
    let realImg = req.file.filename;
    console.log("Imagen a uplodear------------" + realImg);

    if (newImg == "" || !newImg) {
      await db.Menu.update(
        { id: productToEdit.id, ...req.body, image: productToEdit.image },
        { where: { id: id } }
      );
      console.log("-----------ENTRO EL IF-----------");
    } else {
      //carga la nueva info a la DB
      let oldImg = productToEdit.image;

      let uploadPath = path.join(__dirname, "../../public/img/products/");
      let erasePath = uploadPath + oldImg;
      fs.unlinkSync(erasePath);//ESTO requiere handler en caso de que la imagén no se encuentre o crashea

      await db.Menu.update(
        { id: productToEdit.id, ...req.body, image: newImg },
        { where: { id: id } }
      );
      console.log("-----------ENTRO EL ELSE-----------");
      
      
    }

    return res.redirect("/");
  },
  borrar: async (req, res) => {
    const id = req.params.id;
    const imgName = await db.Menu.findByPk(id);

    let img = imgName.dataValues.image;
    console.log(img);
    let uploadPath = path.join(__dirname, "../../public/img/products/");
    let erasePath = uploadPath + img;
    fs.unlinkSync(erasePath); //ESTO requiere handler en caso de que la imagén no se encuentre o crashea

    db.Menu.destroy({
      where: { id: id },
    }).then(res.redirect("/"));
  },
};
module.exports = productController;
