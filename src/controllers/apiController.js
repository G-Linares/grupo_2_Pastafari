
let db = require("../../database/models");

const apiController = {
    allUsers: (req, res) => {
        db.Users.findAll().then((resultado) => {
          res.json(resultado)
        });
      },
    allDishes: (req, res) => {
        db.Menu.findAll().then((resultado) => {
          res.json(resultado)
        });
      },
};


module.exports = apiController;
