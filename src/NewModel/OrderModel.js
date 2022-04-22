const mongoose=require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const OrermodelSchema= new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'UserData'
    },
	productId: {
        type: ObjectId,
        ref: 'Product'
    },
	amount: Number,
	isFreeAppUser: Boolean,
    Date: String
},{timestamps:true})

module.exports=mongoose.model("OrderDetail",OrermodelSchema)