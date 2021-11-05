const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const SupplierSchema = new Schema({
    supplierID: {
        type: String,
        required: true
    },

    supplierName: {
        type: String,
        required: true
    },

    dateAdded:{
        type: Date,
        default: Date.now
    }
});

module.exports = Supplier = mongoose.model('suppliers', SupplierSchema);