
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
let userUpload = multer({
  storage: userstorage,
}).single('img');

module.exports = userUpload;