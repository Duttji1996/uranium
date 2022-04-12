const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: { type: String,
        enum: ["Regional","Engineering","Law","Technical Education"]
    },
    year : Number,
    mobile:{
        type: Number,
        unique: true,
        required: true
    }
 
}, { timestamps: true });

module.exports = mongoose.model('bookData', bookSchema) //bookDatas