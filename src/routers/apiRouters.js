const express = require("express");
const apiController = require("../controllers/apiController.js");
const apiRouters = express.Router();


//renders contact page
apiRouters.get("/users", apiController.allUsers);
apiRouters.get("/dishes", apiController.allDishes);

module.exports = apiRouters;
