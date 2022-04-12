const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    FirstName: String,
    LastName: String,
    MobileNo: {type: String, required: true, unique: true},
    Email_Id: String,
    Age: Number,
    Gender: {
        type: String,
        enum: ["male","female"]
    },
    Business: String,
},{timestamps: true})

module.exports=mongoose.model('newData',userSchema);