
const {Users} = require('../models');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const {username,password, name, last_name, email, img } = req.body;
      bcrypt.hash(password, 10).then((hash) => {
        Users.create({
          username: username,
          password: hash,
          name: name,
          last_name:last_name,
          email:email,
          img:img
        })
        res.json("guardado")
      });    

};

const seeUsers = async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json(listOfUsers);
};

const loginUser = async (req, res) => {
  const {username, password } = req.body;
  const user = await Users.findOne({ where: {username: username}});
  if(!user){
    return res.json({error:"Usuario no existe"});
  } 
  bcrypt.compare(password, user.password).then((match) => {
    if(!match){
      return res.json({error:"Usuario o Contraseña incorrectas"});
    }
    res.json("Logged in");

  }).catch((error) => {
    console.log(error)
  })
};
module.exports = {
    createUser,
    seeUsers,
    loginUser
}