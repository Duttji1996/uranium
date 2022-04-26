const mongoose=require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const BlogSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    }, 
    authorId: {
        type: ObjectId,
        ref: "author",
        required: true
    }, 
    tags: [String], 
    category: {type: [String],
        required: true,
        }, 
    subcategory: [String],            //array of string, examples[technology-[web development, mobile development, AI, ML etc]] }, 
    isDeleted: {
        type:Boolean, 
        default: false}, 
    publishedAt: {
        type: Boolean,
        default:false
    }, 
    isPublished: {
        type: Boolean, 
        default: false}


},{timestamps: true})


module.exports=mongoose.model("blogger",BlogSchema)