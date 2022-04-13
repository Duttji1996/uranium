const bookSchema= require("../BookModel/BooksSchema")

const bookPost = async function(req,res){
    let data=req.body;
    let savedata= await bookSchema.create(data);
    res.send(savedata)
};

const bookGet= async function(req,res){
    let data =req.body
    let alldata= await bookSchema.find({ authorName: "JS"})
    res.send({alldata})
};

module.exports.bookPost=bookPost;
module.exports.bookGet=bookGet;