const { body } = require("express-validator");
const db = require("../../database/models");

const validateSU = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nombre no puede estar vacio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Nombre debe tener al menos 3 caractéres"),
  body("lastname")
    .trim()
    .notEmpty()
    .withMessage("Apellido no puede estar vacio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Apellido debe tener al menos 3 caractéres"),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Usuario no puede estar vacio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Usuario debe tener al menos 3 caractéres")
    .custom( async(value, {req}) => {
      let newUserName = req.body.username;
      let checkUserName = await db.Users.findOne({where: {user_name: newUserName}});
      console.log(checkUserName);
      if ( checkUserName != undefined) {
        throw new Error("El usuario ya existe");
      } else {
        return true;
      }
    }),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email no puede estar vacio")
    .bail()
    .isEmail()
    .withMessage("Inserta un email valido")
    .custom( async(value, {req}) => {
      let newEmail = req.body.email;
      let checkEmail = await db.Users.findOne({where: {email: newEmail}});
      console.log(checkEmail);
      if ( checkEmail != undefined) {
        throw new Error("El email ya existe");
      } else {
        return true;
      }
    }),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password no puede estar vacio")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password debe tener al menos 6 caractéres"),
  body("coPassword")
  .trim()
  .notEmpty()
  .withMessage("Confirmación de password no puede estar vacia")
  .bail()
  .isLength({min: 6})
  .withMessage("La confirmación del password debe tener 6 caractéres")
  .bail()
  .custom( async (coPassword, {req}) => {
    const password = req.body.password;
    if (password !== coPassword) {
      throw new Error("Los password no son iguales")
    }
  }),
  body("img")
  .custom((value, { req }) => {
    console.log(req.file);
    switch (req.file.mimetype) {
      case "image/png":
        return true;
      case "image/jpg":
        return true;
      case "image/jpeg":
        return true;
      default:
        throw new Error("La imagen debe ser png, jpg o jpeg");
    }
  })
  .custom((value, {req}) => {
    if (req.file.size > 5000000) {
      throw new Error("La imagen debe pesar 5mb o menos");
    } else {
      return true;
    }
  }),
];

module.exports = validateSU;
