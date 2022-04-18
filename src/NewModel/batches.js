const mongoose=require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const batcheSchema= new mongoose.Schema({

    name: String,
    size: Number,
    program: {
        type: String,
        enum: ["Backend", "Frontend"]
    },


},  { timestamps: true });

module.exports = mongoose.model('Batche', batcheSchema)