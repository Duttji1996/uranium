const newAuthor=require("../NewModel/newAuthor");
const newBook=require("../NewModel/newBook");
const newPublisher=require("../NewModel/newPublisher");


//  1st Problem: Author Creation

const NewAuthor= async function(req,res){
    let body= req.body;
    const SaveDataAuthor= await newAuthor.create(body);
    res.send(SaveDataAuthor)
}

// 2nd Publisher schema 

const publisher= async function(req,res){
    let body= req.body;
    const PublisherData= await newPublisher.create(body);
    res.send(PublisherData);
}

// Problem A

const ProblemA = async function (req, res) {
    let data= req.body
   
    const pub = await newPublisher.find({_id: data.publisher_id})
      console.log("pub result: ",pub)
     if (pub.length> 0)
     {
     let aut = await newAuthor.find({_id: data.author_id})
      console.log(aut)
          if (aut.length >0) {
             let bookCreated = await newBook.create(data)
               res.send(bookCreated)
          }
          else{ res.send( "author doesnt exist")}
     }
    else {  res.send("no such publisher exist")}
}

 // Assingment no : 4  ----------- Last Question of Assignment
const getBooksWithAuthorDetails = async function (req, res) {
    let body=req.body;
    let specificBook = await newBook.find(body).populate(['publisher_id','author_id'])
    res.send(specificBook);
}

// Assignment 5 " A"
const newProblem= async function(req,res){

    const abc= await newBook.updateMany({isHardCover: false});
    console.log("abc: ", abc)
    // const pq= await newPublisher.find({$or:[{name:"Awadh Prakashan"},{name:"Geeta GorakhPur Prakashan"}]}).select({_id:1})
    // console.log(pq)
    // const abcd= await newBook.updateMany({publisher_id: pq},{isHardCover:true})
    
    
    const abcd= await newBook.updateMany({$or:[{publisher_id: "625910f8349615407bc437a0"},{publisher_id: "62591112349615407bc437a2"}]},{isHardCover:true})
    console.log(abcd)
    const books=await newBook.find();
    res.send(books)
}

// Assignment 5 "B"

const bigProblem= async function(req,res){
    let abc= await newAuthor.find({rating: {$gt: 3.5}}).select({_id:1})
    console.log(abc)
    const abcd= await newBook.updateMany({author_id: abc},{$inc:{price: 200}})
    console.log(abcd)
    const abcde= await newBook.find()
    res.send(abcde)
}









module.exports.newProblem=newProblem;
module.exports.NewAuthor=NewAuthor;

module.exports.publisher=publisher;

module.exports.getBooksWithAuthorDetails=getBooksWithAuthorDetails;
module.exports.ProblemA=ProblemA;
module.exports.bigProblem=bigProblem