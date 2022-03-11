const fs = require("fs");
const path = require("path");

//require database to work
let db = require("../../database/models");
const Op = db.Sequelize.Op;

//requiere bscryptjs to hash password
const bcrypt = require("bcryptjs");

//require express-validator
const { validationResult } = require("express-validator");

// jala el JSON de menu Completo
const menuCompleto = path.join(__dirname, "../data/menuCompleto.json");
const menu = JSON.parse(fs.readFileSync(menuCompleto, "utf-8"));

// Jala el JSON de los reviews
const reviewsFilePath = path.join(__dirname, "../data/reviews.json");
const reviews = JSON.parse(fs.readFileSync(reviewsFilePath, "utf-8"));

//jala el JSON de las platillos Del mes
const platillosDelMesFilePath = path.join(
  __dirname,
  "../data/platillosDelMes.json"
);
const platillosDelMes = JSON.parse(
  fs.readFileSync(platillosDelMesFilePath, "utf-8")
);

//jala el JSON de usuarios
const usersPath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

//podemos ocuparlo despues para validar el string que entra
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  home: async (req, res) => {
    console.log("Usuario is: ");
    console.log(req.session.loggedUser);
    console.log("--------");

    let platillosDelMes = await db.Menu.findAll({
      where: { isTopPlate: 1 },
    });

    res.render("home", {
      platillosDelMes,
      reviews,
      user: req.session.loggedUser,
    });
  },
  aboutUs: (req, res) => {
    res.render("aboutUs", { user: req.session.loggedUser });
  },
  carrito: (req, res) => {
    res.render("carrito", { item: menu, user: req.session.loggedUser });
  },
  sign_up: (req, res) => {
    res.render("createAccount", { user: req.session.loggedUser });
  },
  new_sign_up: (req, res) => {

    let errors = validationResult(req);
    const { name, lastname, username, email, password } = req.body;

    if (errors.isEmpty()) {
      let incomPass = password;
      let hashedPass = bcrypt.hashSync(incomPass, 10);
      db.Users.create({
        name,
        last_name: lastname,
        user_name: username,
        email,
        password: hashedPass,
        img: req.file.filename,
      });
      res.redirect("/");
    } else {
      res.render("createAccount", {
        errors: errors.array(),
        old: req.body,
        user: req.session.loggedUser,
      });
    }
  },
  search: async (req, res) => {
    let search = req.query.keywords.toLowerCase();
    // recibe un string en la barra de busqueda y busca en DB todo lo que se parezca
    const results = await db.Menu.findAll({ where: {item: {[Op.like]: `%${search}%`}}});
    //si hay un match manda la info de ese objeto
    if (results == []) {
      res.render("error", { msg: "ERROR, NO HAY PLATILLOS EN LOS DATOS" });
    } else {
      res.render("results", {
        item: results,
        search,
        user: req.session.loggedUser,
      });
    }
  },
  loginExisting: async (req, res) => {

    const user = await db.Users.findOne({
      where: { user_name: req.body.username },
    });

    if (user) {
      /* console.log("---------Este es el objeto de sequelize que trae----------");
      console.log(userToSearch.dataValues); */
      bcrypt
        .compare(req.body.password, user.dataValues.password)
        .then((result) => {

          if (result) {
            delete user.dataValues.password;
            /* console.log("----Pass fue borrado----");
            console.log(userToSearch.dataValues); */
            req.session.loggedUser = user.dataValues;
              /* console.log("------el session es------");
              console.log(req.session.loggedUser); */

            if (req.body.recordarme != undefined) {
              res.cookie("recordarme", user.user_name, { maxAge: 60000 });
            }

            return res.redirect("/");
          } else {
            console.log("Contraseña no hace match");
          }
        })
        .catch((err) => console.error(err));
    } else {
      /* res.render("home", {
        errormessage: "No hay usuario",
        platillosDelMes,
        reviews,
        user: req.session.loggedUser,
      }); */
      return res.redirect("/");
    }
  },
  dashboard: (req, res) => {
    res.send("estas dentro");
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
  contact: (req, res) => {
    return res.render("contact", { user: req.session.loggedUser });
  },
};

module.exports = mainController;
