const bookmodel= require("../BookModel2/Schema2")

// post data create Problem 1 completed
const book1Post = async function(req,res){
    let data=req.body;
    let savedata= await bookmodel.create(data);
    res.send(savedata)
};

// Problem 2 completed
const booklist= async function(req,res){
    let data =req.body
    let alldata= await bookmodel.find().select({bookName: true, authorName: true , _id: 0})
    res.send({alldata})
};

// Problem 3 completed
const listbookyear= async function(req,res){
    let data =req.body.year
    let alldata= await bookmodel.find({ year: data  }).select({bookName: 1, _id: 0})
    res.send({alldata})
};

//problem 4 
const ParticularBooks= async function(req,res){
    let condition =req.body
    let alldata= await bookmodel.find(condition)
    res.send({alldata})
};

//problem 5 completed

const inrBooks= async function(req,res){
    let alldata= await bookmodel.find({"price.IndianPrice":{$in:[100,200,500] }}).select({bookName: 1, _id: 0})
    res.send({alldata})
};

//Problem 6 completed

const randomBooks= async function(req,res){
    let alldata= await bookmodel.find({$or: [{stockAvailable: Boolean }, {totalPages: {$gt: 500}} ] }).select({bookName: true, _id: 0})
    res.send({alldata})
};

module.exports.bookPostController=book1Post;
module.exports.bookGetController=booklist;
module.exports.bookyearlist=listbookyear;
module.exports.particularBooklist=ParticularBooks;
module.exports.IndianBook=inrBooks;
module.exports.randomBook=randomBooks;