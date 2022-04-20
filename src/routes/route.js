const express = require('express');
const router = express.Router();
const mainController= require("../middleware/Mwcontroller")  // import of middleware
const BookController= require("../BookController/BookController")

function middleware (req,res,next){
    let loggeedIn= true
    if(loggeedIn==true){
        next()
    }
    else{
        console.log("No Log in, Please sign Up or Register")
        res.send("No Log in, Please sign Up or Register")
    }
}

router.post("/BookCreate", BookController.BookCreate)
router.get("/mid1", middleware, mainController.mid1)
router.get("/mid2", middleware, mainController.mid2)
router.get("/mid3", middleware, mainController.mid3)
router.get("/mid4", middleware, mainController.mid4)
router.get("/FindBook", middleware, mainController.mid1, mainController.mid2,mainController.mid3,mainController.mid4, BookController.FindBook)



module.exports = router;