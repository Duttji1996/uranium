const bookmodel= require("../model/bookmodel");

const BookCreate= async function(req,res){
    let body =req.body;
    let book= await bookmodel.create(body);
    res.send(book)
}

const FindBook= async function(req,res){
    
    let book= await bookmodel.find();
    res.send(book)
}


module.exports.BookCreate=BookCreate
module.exports.FindBook=FindBook