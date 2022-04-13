const mongoose = require('mongoose');

const bookmodel = new mongoose.Schema( {
bookName: {
    type: String,
    required: true
},
price: {
    IndianPrice: String,
    EuropePrice: String
},
year: {
    type: Number,
    default: 2021
},
tags: [String],
authorName: String,
totalPages: Number,
stockAvailable: Boolean (),

}, { timestamps: true });

module.exports = mongoose.model('bookCollection', bookmodel)

