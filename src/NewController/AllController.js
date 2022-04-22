const ProdcutModel= require("../NewModel/ProductModel")
const OrderModel= require("../NewModel/OrderModel")
const UserModel= require("../NewModel/UserModel")
const { head } = require("../routes/route")
const { findOneAndUpdate } = require("../NewModel/ProductModel")

const CreateProduct=async function(req,res){
    let data= req.body
    let Prodcut= await ProdcutModel.create(data)
    res.send(Prodcut)
}

const UserCreate= async function(req,res){
    let data=req.body

    let userCreate= await UserModel.create(data)

    res.send(userCreate)
}

const OrderCreate= async function(req,res){
    let data = req.body
    let header = req.headers.isfreeappuser
    console.log("Header:  ", header)

    let ProdcutValidation= await ProdcutModel.findById({_id:data.productId})
    console.log("ProdcutValidation:  ", ProdcutValidation.price)
    if(!ProdcutValidation){
        console.log("No Product Verify")
        return res.send("No Product Verify ")
    }

    let UserValidation= await UserModel.findById({_id:data.userId})
    console.log("UserValidation:  ", UserValidation.balance)
    if(!UserValidation){
        console.log("No User Found")
        return res.send("No User Found")
    }

    console.log("everything is okay till here")

    if(header == "false"){
        if(UserValidation.balance>ProdcutValidation.price){

            console.log("Under line number 46 ")
            let createOrder= await OrderModel.create(data)

            let billreceipt= await OrderModel.findOneAndUpdate({userId:data.userId,productId: data.productId},{$set:{amount: ProdcutValidation.price,isFreeAppUser: false}},{new: true})

            let updateBalance= await UserModel.findByIdAndUpdate({_id:data.userId},{$set: {balance:UserValidation.balance - ProdcutValidation.price}},{new:true})

            return res.send({updateBalance,billreceipt})
        }
        return res.send("You have not much balance")
    }

    console.log("Hi am in last line ")
    let createorder = await OrderModel.create(data)

    let updateAmount= await OrderModel.findOneAndUpdate({userId:data.userId,productId: data.productId},{$set:{amount:0, isFreeAppUser: true}},{new:true})

    return res.send(updateAmount)

}




module.exports.CreateProduct=CreateProduct
module.exports.UserCreate=UserCreate
module.exports.OrderCreate=OrderCreate