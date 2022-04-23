const express = require('express');
const router = express.Router();

const newUserContrller= require("../controllers/UserModelController")
const Middleware= require("../Middleware/auth")



//Assignment Router

router.post("/userDocument",newUserContrller.UserDocument)              //1st Problem API
router.post("/LoginForm",newUserContrller.LoginForm);                   // 2nd Problem API

router.get("/GetUserDeatail/:userId", Middleware.mid1, Middleware.mid2,newUserContrller.GetUserDeatail)   //3rd Problem API with Middlware

router.put("/UpdateUser/:userId",Middleware.mid1,newUserContrller.UpdateUser)                               // 4th Problem API with Middleware

router.delete("/DeleteUser/:userId",Middleware.mid1,newUserContrller.DeleteUser)                                            // 5h Problem API with Middleware

router.get("/UserAutherization/:userId", Middleware.mid1,Middleware.mid2,newUserContrller.UserAutherization)        



module.exports = router;