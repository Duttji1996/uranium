const express = require('express');
const router = express.Router();
const BooksSchema = require('../BookSchema/BooksSchema');
const bookAssign= require('../bookController/book')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/Postbook", bookAssign.bookPost);

router.get("/Getbook", bookAssign.bookGet)
module.exports = router;