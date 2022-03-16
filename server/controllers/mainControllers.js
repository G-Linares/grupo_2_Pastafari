const { Menu } = require('../models');


const index = (req, res) => {
  res.json("Hola?");
};
const indexMenu = async (req, res) => {
  const dish = req.body;
  await Menu.create(dish);
  res.json(dish);
};

module.exports = {
    index,
    indexMenu
}
