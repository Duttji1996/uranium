
const AuthorModel= require("../model/author")

const AuthorCreate= async function(req,res){
try{
    let body= req.body
    let author= await AuthorModel.create(body);    
    res.status(201).send(author);
}
catch(err){
    res.status(403).send({ msg: "Error", error: err.message })
}
}

module.exports.AuthorCreate=AuthorCreate