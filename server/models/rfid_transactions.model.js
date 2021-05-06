const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    UUID: {
        type: String,
        required: true,
        maxlength: 15
    },
    transport_fare: {
        type: String,
        required: true,
        maxlength: 4
    },
    new_balance: {
        type: String,
        maxlength: 7
    }
},{timestamps:true})

const transactionsModel = mongoose.model("Transactions", transactionsSchema)
module.exports = transactionsModel