const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const CategorySchema = new Schema({
    categoryID: {
        type: String,
        required: true
    },

    categoryName: {
        type: String,
        required: true
    },

    dateAdded:{
        type: Date,
        default: Date.now
    }
});

module.exports = Category = mongoose.model('itemCategory', CategorySchema);