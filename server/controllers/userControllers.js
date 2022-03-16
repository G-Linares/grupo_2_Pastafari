
const {Users} = require('../models');

const users =  async(req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
  };
  const indexUsers = async (req, res) => {
    const user = req.body;
    await Users.create(user);
    res.json(user);
  };

module.exports = {
    users,
    indexUsers
}