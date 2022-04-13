const express = require('express');
const router = express.Router();
const BooksSchema = require('../BookModel/BooksSchema');
const bookAssign= require('../bookContro/book')
const bookcontroller=require("../bookController/bookController")


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


router.post("/Postbook", bookAssign.bookPost);
router.get("/Getbook", bookAssign.bookGet)
// 2nd Assignment

router.post("/createBook", bookcontroller.bookPostController );             //1st Api
router.get("/bookList", bookcontroller.bookGetController);
router.get("/booksinyear",bookcontroller.bookyearlist);
router.get("/particularBooks",bookcontroller.particularBooklist);
router.get("/Xinrbooks",bookcontroller.IndianBook);
router.get("/randomBooks",bookcontroller.randomBook);




module.exports = router;