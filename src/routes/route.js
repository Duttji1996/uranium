const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const MainController= require("../NewController/AllController");
const middleware= require("../MiddlwareController/MiddlewareController")

router.post("/CreateProduct",MainController.CreateProduct)

router.post("/UserCreate", middleware.mid1, MainController.UserCreate)

router.post("/OrderCreate",middleware.mid1,MainController.OrderCreate)






module.exports = router;