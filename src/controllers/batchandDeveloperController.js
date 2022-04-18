const { query } = require("express");
const BatchModel= require("../NewModel/batches")
const DeveloperModel= require("../NewModel/developer")


const BatchCreate = async function(req,res){
    let data=req.body;
    let abcd= await BatchModel.create(data)
    res.send(abcd)
}
const DeveloperCreate= async function(req,res){
    let data= req.body;
    let abcd= await DeveloperModel.create(data);
    res.send(abcd)

}

// Problem Number 3

const ProblemA= async function(req,res){
    let develperlist= await DeveloperModel.find({gender: "female", percentage:{$gte:70}})
    // console.log("develperlist: ", develperlist)

    res.send(develperlist)
}
const ProblemB= async function(req,res){
     let params=req.query
     let data= params.program
     console.log( "data: ",  data)
     let programId= await BatchModel.find({program: data}).select({_id:1})
     console.log("abcd: ",programId)
     const newData= await DeveloperModel.find({percentage:{$gte: params.percentage}, batch_id: programId}).populate("batch_id")
     res.send(newData)

}


module.exports.ProblemA=ProblemA
module.exports.ProblemB=ProblemB



module.exports.BatchCreate=BatchCreate
module.exports.DeveloperCreate=DeveloperCreate;
