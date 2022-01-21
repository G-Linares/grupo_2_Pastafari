const { body } = require("express-validator");

const validateSU = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nombre no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Nombre debe tener al menos 3 caractéres"),
  body("lastname")
    .trim()
    .notEmpty()
    .withMessage("Apellido no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Apellido debe tener al menos 3 caractéres"),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Usuario no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Usuario debe tener al menos 3 caractéres"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email no puede estar vacio")
    .isEmail()
    .withMessage("Inserta un email valido"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password no puede estar vacio")
    .isLength({ min: 6 })
    .withMessage("Password debe tener al menos 6 caractéres"),
];

module.exports = validateSU;