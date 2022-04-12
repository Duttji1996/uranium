const express = require('express');
const router = express.Router();
const BooksSchema = require('../BookSchema/BooksSchema');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/Postbook", async function(req,res){
    let data=req.body;
    let savedata= await BooksSchema.create(data);
    res.send(savedata)
});

router.get("/Getbook", async function(req,res){
    let data =req.body
    let alldata= await BooksSchema.find()
    res.send({alldata})
});

module.exports = router;