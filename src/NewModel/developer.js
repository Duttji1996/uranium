const mongoose= require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {

    name:String,
    gender:{
        type: String,
        enum:["male","female","others"]
    },
    percentage:Number,
    batch_id:{
        type: ObjectId,
        ref: "Batche",
    }

}, { timestamps: true });


module.exports = mongoose.model('developer', developerSchema)

