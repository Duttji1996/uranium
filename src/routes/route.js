const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const newUserContrller= require("../controllers/UserModelController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/user", userController.createUser  )

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId",  userController.updateUser)

//Assignment Route

router.post("/userDocument",newUserContrller.UserDocument)
router.post("/LoginForm",newUserContrller.LoginForm);

router.get("/GetUserDeatail/:userId", newUserContrller.GetUserDeatail)

router.put("/UpdateUser/:userId",newUserContrller.UpdateUser)

router.delete("/DeleteUser/:userId",newUserContrller.DeleteUser)

module.exports = router;