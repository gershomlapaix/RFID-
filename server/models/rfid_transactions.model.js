const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    UUID: {
        type: String,
        required: true,
        maxlength: 15
    },
    transport_fare: {
        required: true,
        type: Number,
        min: 0
    },
    new_balance: {
        type: Number,
        min: 0
    }
},{timestamps:true})

const transactionsModel = mongoose.model("Transactions", transactionsSchema)
module.exports = transactionsModel