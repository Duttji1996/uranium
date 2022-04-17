const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    bookname: String,
    price: Number,
    rating: Number,
    author_id: {
        type: ObjectId,
        ref: "NewAuthorBook",
        required: true
    },
    publisher_id:{
        type: ObjectId,
        ref: "PublisherBook",
        required: true
    },
    isHardCover: {
        type: Boolean,
        default: false
    }

    
}, { timestamps: true });


module.exports = mongoose.model('newBook', newBookSchema)