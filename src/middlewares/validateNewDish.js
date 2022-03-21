const { body } = require("express-validator");
const whitelist = ["image/png", "image/jpeg", "image/jpg"];

const validateNewDish = [
  body("item")
    .trim()
    .notEmpty()
    .withMessage("Nombre no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Nombre debe tener al menos 3 caractéres"),
  body("type")
    .trim()
    .notEmpty()
    .withMessage("Tipo no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Tipo debe tener al menos 3 caractéres"),
  body("dish")
    .trim()
    .notEmpty()
    .withMessage("Platillo no puede estar vacio")
    .isLength({ min: 3 })
    .withMessage("Platillo debe tener al menos 3 caractéres"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Descripción no puede estar vacio"),
 /*  body("image")//esto no llega a usarse si multer tira a error y mata la página
    .notEmpty()
    .withMessage("Image no puede estar vacio"), */
  body("score")
    .trim()
    .notEmpty()
    .withMessage("Score no puede estar vacio")
    .isLength({ max: 1 })
    .withMessage("Score debe ser un número entre 0 y 5"),
  body("discount")
    .trim()
    .notEmpty()
    .withMessage("Discount no puede estar vacio"),
  body("boughts").trim().notEmpty().withMessage("Boughts no puede estar vacio"),
  body("price").trim().notEmpty().withMessage("Precio no puede estar vacio"),
];

module.exports = validateNewDish;
