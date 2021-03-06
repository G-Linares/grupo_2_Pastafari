const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

//require database to work
let db = require("../../database/models");

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
  platilloDelMes: async (req, res) => {
    const id = parseInt(req.params.id);

    let topDish = await db.Menu.findByPk(id);

    if (!topDish || id < 0 || isNaN(0)) {
      res.render("error");
    } else {
      res.render("product", {
        item: topDish,
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
    let errors = validationResult(req);
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

    if (errors.isEmpty()) {
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
    } else {
      let unadmitedImg = req.file.filename;
      console.log(unadmitedImg);
      let uploadPath = path.join(__dirname, "../../public/img/products/");
      let erasePath = uploadPath + unadmitedImg;
      if (fs.existsSync(erasePath)) {
        fs.unlinkSync(erasePath);
      }
      db.Menu.findAll().then(function (menuView) {
        res.render("productosPorEditar", {
          productos: menuView,
          user: req.session.loggedUser,
          errors: errors.array(),
          old: req.body,
        });
      });
    }
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
    let newImg = "";
    if (req.file != undefined) {
      newImg = req.file.filename;
    }
    let errors = validationResult(req);

    if (errors.isEmpty()) {
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
        fs.unlinkSync(erasePath); //ESTO requiere handler en caso de que la imagén no se encuentre o crashea

        await db.Menu.update(
          { id: productToEdit.id, ...req.body, image: newImg },
          { where: { id: id } }
        );
        console.log("-----------ENTRO EL ELSE-----------");
      }

      return res.redirect("/");
    } else {
      console.log("Hay errores al update");
      return res.render("editarProducto", {
        productToEdit,
        user: req.session.loggedUser,
        errors: errors.array()
      });
    }
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
