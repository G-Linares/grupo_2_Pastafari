const whitelist = ["image/png", "image/jpeg", "image/jpg"];

const multer = require("multer");
let userstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/users");
  },
  filename: function (req, file, cb) {
    cb(null, `${req.body.username}_img_${file.originalname}`);
  },
});

//init upload
const maxSize = 1000000; //1MB (mb * bt)
let userUpload = multer({
  storage: userstorage,
  fileFilter: (req, file, cb) => {
    if (!whitelist.includes(file.mimetype)) {
      console.log("---Ejecutó el if porque no es un tipo de archivo aceptado----");
      cb(null, false);
      return cb(new Error("Tipo de imagen invalida, necesitas PNG, JPEG o JPG"));
    }
    console.log("---Es un archivo aceptado y continua con las operaciones----");
    cb(null, true);
  },
  limits: { fileSize: maxSize }
}).single('img');

module.exports = userUpload;