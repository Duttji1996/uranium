const { default: mongoose } = require("mongoose");



const BookSchema= new mongoose.Schema({
    Name: String,
   Subject: String,
    Gender: {
        type: String,
        enum:["male","female"]
    },
    Sale: Number,
}, {timeseries: true})

module.exports=mongoose.model("BookData", BookSchema)