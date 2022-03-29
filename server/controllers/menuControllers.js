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
const deleteDish = async ( req, res ) => {
  const dishId = req.params.dishId

  await Menu.destroy({
    where:{
      id:dishId,
    }
  });
  res.json("Se elimino satisfactoriamente")
}
// comienza controladores para editado de items, son varios para simplicidad
const editImageDish = async ( req, res ) => {
  const {newImage, id} = req.body;
  await Menu.update({image: newImage},{where:{id:id}})
  res.json(newImage);
}
const editNameDish = async ( req, res ) => {
  const {newItem, id} = req.body;
  await Menu.update({item: newItem},{where:{id:id}})
  res.json(newItem);
}
const editDescriptionDish = async ( req, res ) => {
  const {newDescription, id} = req.body;
  await Menu.update({description: newDescription},{where:{id:id}})
  res.json(newDescription);
}
const editPriceDish = async ( req, res ) => {
  const {newPrice, id} = req.body;
  await Menu.update({price: newPrice},{where:{id:id}})
  res.json(newPrice);
}
// termina controladores para editado de items

module.exports = {
    index,
    indexMenu,
    singleDish,
    deleteDish,
    editImageDish,
    editNameDish,
    editDescriptionDish,
    editPriceDish
}
