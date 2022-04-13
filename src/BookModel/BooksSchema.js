const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: { type: String,
        enum: ["Regional","Engineering","Law","Technical Education", "Hindi"]
    },
    year : Number,

 
}, { timestamps: true });

module.exports = mongoose.model('bookData', bookSchema) //bookDatas