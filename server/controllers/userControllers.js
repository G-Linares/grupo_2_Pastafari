const { Users } = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require('jsonwebtoken');

const createUser = async (req, res) => {
  const { username, password, name, last_name, email, img,type } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      name: name,
      last_name: last_name,
      email: email,
      img: img,
      type:type
    });
    res.json("guardado");
  });
};

const seeUsers = async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json(listOfUsers);
};

const loginUser = async (req, res) => {
  const { username, password } = req.body; 
  const user = await Users.findOne({ where: { username: username } });
  if (!user) return res.json({ error: "Usuario no existe" });

  bcrypt.compare(password, user.password).then(async (match) => {
      if (!match) return res.json({ error: "Usuario o Contraseña incorrectas" });   
      const accessToken = sign(
        { username: user.username, id: user.id },
        "importantsecret"
      );   
      // ya no voy a mandar solamente el TokenExpiredError, ya tambien mando el username y el id
      res.json({token:accessToken, username:username, id:user.id, type:user.type});
    })
    
};

const auth = (req,res) => {
  res.json(req.user);
}

const profile = async (req, res) => {
  const id = req.params.id;
  const user = await Users.findByPk(id);
  res.json(user);
};

const editUsernameUser = async ( req, res ) => {
  const {newUsername, id} = req.body;
  await Users.update({username: newUsername},{where:{id:id}})
  res.json(newUsername);
}
const editNameUser = async ( req, res ) => {
  const {newName, id} = req.body;
  await Users.update({name: newName},{where:{id:id}})
  res.json(newName);
}
const editLastNameUser = async ( req, res ) => {
  const {newLastName, id} = req.body;
  await Users.update({last_name: newLastName},{where:{id:id}})
  res.json(newLastName);
}
const editEmailUser  = async ( req, res ) => {
  const {newEmail, id} = req.body;
  await Users.update({email: newEmail},{where:{id:id}})
  res.json(newEmail);
}
// const editPasswordUser = async ( req, res ) => {
//   const {newPassword, id} = req.body;
//   await Users.update({password: newPassword},{where:{id:id}})
//   res.json(newPassword);
// }
const editTypeUser = async ( req, res ) => {
  const {newType, id} = req.body;
  await Users.update({type: newType},{where:{id:id}})
  res.json(newType);
}

module.exports = {
  createUser,
  seeUsers,
  loginUser,
  auth,
  profile,
  editUsernameUser,
  editNameUser,
  editLastNameUser,
  // editPasswordUser,
  editTypeUser,
  editEmailUser
};
