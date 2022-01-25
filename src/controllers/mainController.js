const fs = require("fs");
const path = require("path");

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
  home: (req, res) => {
    console.log('Usuario is:')
    console.log(req.session.loggedUser)
    console.log('-------')
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
    // ingresa un nuevo usuario al JSON de usuarios
    //console.log(req.body);
    let errors = validationResult(req);
    //res.send(errors);
    if (errors.isEmpty()) {
      let incomPass = req.body.password;
      let hashedPass = bcrypt.hashSync(incomPass, 10);
      let newUser = {
        id: users.length + 1,
        ...req.body,
        password: hashedPass,
        img: req.file.filename,
      };
      users.push(newUser);
      fs.writeFileSync(usersPath, JSON.stringify(users, null, " "));
      res.redirect("/");
    } else {
      res.render("createAccount", {
        errors: errors.array(),
        old: req.body,
        user: req.session.loggedUser,
      });
    }
  },
  search: (req, res) => {
    let search = req.query.keywords.toLowerCase();
    // recibe un string en la barra de busqueda y hace un filter para encontrar que objeto tiene ese mismo nombre
    let productsToSearch = menu.filter((menu) =>
      menu.item.toLowerCase().includes(search)
    );
    //si hay un match manda la info de ese objeto
    if (productsToSearch == []) {
      res.render("error", { msg: "ERROR, NO HAY PLATILLOS EN LOS DATOS" });
    } else {
      res.render("results", {
        item: productsToSearch,
        search,
        user: req.session.loggedUser,
      });
    }
  },
  loginExisting: (req, res) => {
    const user = users.find((user) => user.username == req.body.username);

    if (user) {
      bcrypt
        .compare(req.body.password, user.password)
        .then((result) => {
          if (result) {
            delete user.password;
            req.session.loggedUser = user;

            if (req.body.recordarme != undefined) {
                res.cookie('recordarme', user.username, { maxAge: 60000 })
            }

            return res.redirect("/producto/menu");
          } else {
            console.log("Contrasena no hace match");
          }
        })
        .catch((err) => console.error(err));
    } else {
      res.render("home", {
        errormessage: "No hay usuario",
        platillosDelMes,
        reviews,
        user: req.session.loggedUser,
      });
    }
  },
  dashboard: (req, res) => {
    res.send("estas dentro");
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect('/');
  }
};

module.exports = mainController;
