const { body } = require("express-validator");

const validateLogin = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Necesitas ingresar tu usuario")
    .isLength({ min: 3 })
    .withMessage("Los usuarios tienen más de 2 caractéres"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Necesitas ingresar tu password")
    .isLength({ min: 3 })
    .withMessage("Recuerda que los password son de al menos 6 caractéres"),
];

module.exports = validateLogin;