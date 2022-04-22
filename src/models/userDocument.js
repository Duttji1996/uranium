const mongoose=require("mongoose");
const { required } = require("nodemon/lib/config");


const UserModelSchema= new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : {
        type:Number,
        required: true
    },
    emailId : String,
    password : String,
    gender : {
    type:String,
    enum: ['male','female','others']
},
	isDeleted: {type: Boolean,
        default: false
    }, 
    age : Number
}, {timestamps :true});


module.exports=mongoose.model("UserModelSchema",UserModelSchema)