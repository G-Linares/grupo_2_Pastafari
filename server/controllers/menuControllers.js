const { Menu } = require('../models');

const index = async (req, res) => {
  const listOfMenu = await Menu.findAll();
  res.json(listOfMenu);
};
const indexMenu = async (req, res) => {
  const dish = req.body;
  await Menu.create(dish);
  res.json(dish);
};
const singleDish = async (req, res) => {
  const id = req.params.id;
  const dish = await Menu.findByPk(id);
  res.json(dish)
};

module.exports = {
    index,
    indexMenu,
    singleDish
}
