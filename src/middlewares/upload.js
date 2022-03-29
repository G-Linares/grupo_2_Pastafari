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

let upload = multer({ storage: storage});

  module.exports= upload;