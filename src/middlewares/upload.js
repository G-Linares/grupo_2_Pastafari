//implements multer with it's storage
const whitelist = ['image/png', 'image/jpeg', 'image/jpg'];

const multer = require("multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/products");
  },
  filename: function (req, file, cb) {
    cb(null, `img_${file.originalname}`);
  },
});

let upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
    if (!whitelist.includes(file.mimetype)) {
      console.log("---Ejecutó el if porque no es un archivo aceptado----");
      cb(null, false);
      return cb(new Error("Tipo de archivo invalido"));
    }
    console.log("---Es un archivo aceptado y continua con las operaciones----");
    cb(null, true);
  }, });

  module.exports= upload;