const bookSchema= require("../BookSchema/BooksSchema")

const bookPost = async function(req,res){
    let data=req.body;
    let savedata= await bookSchema.create(data);
    res.send(savedata)
};

const bookGet= async function(req,res){
    let data =req.body
    let alldata= await bookSchema.find()
    res.send({alldata})
};

module.exports.bookPost=bookPost;
module.exports.bookGet=bookGet;