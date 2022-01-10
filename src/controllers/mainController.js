const req = require("express/lib/request");
const fs = require("fs");
const path = require("path");

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
    res.render("home", { platillosDelMes, reviews });
  },
  carrito: (req, res) => {
    res.render("carrito", { item: menu });
  },
  login: (req, res) => {
    res.render("createAccount");
  },
  loginNew: (req, res) => {
    // ingresa un nuevo usuario al JSON de usuarios
    let newUser = {
      id: users.length + 1,
      ...req.body,
      img: "No-tenemos-profile-pics.png",
    };
    users.push(newUser);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, " "));
    res.redirect("/");
  },
  search: (req, res) => {
    let search = req.query.keywords;
    // recibe un string en la barra de busqueda y hace un filter para encontrar que objeto tiene ese mismo nombre
    let productsToSearch = menu.filter((menu) => menu.item == search);
    //si hay un match manda la info de ese objeto
    if (productsToSearch == "") {
      res.render("error");
    } else {
      // la neta no se por que se manda toThousand pero ahi esta
      res.render("product", { item: productsToSearch[0], search, toThousand });
    }
  },
  loginExisting: (req, res) => {    
    let requestedUser = req.body.username;
    let requestedPassword = req.body.password;
    console.log(requestedUser);
    console.log(requestedPassword)

    let resultUser = users.find(function(element){
      if(element.username == requestedUser && element.password == requestedPassword){
        return true
      }
    });

    if (resultUser) {
      res.redirect("/");
    } else {
      res.send("Usuario o contraseña invalida");
    }
  },
  dashboard: (req, res) => {
    res.send("estas dentro");
  },
};

module.exports = mainController;
