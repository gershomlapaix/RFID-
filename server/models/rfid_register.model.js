const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    UUID: {
        type: String,
        required: true,
        maxlength: 15
    },
    customer: {
        type: String,
        required: true,
        maxlength: 45
    },
    initial_balance: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
})

const registrationModel = mongoose.model("rfid_registration", registrationSchema)
module.exports = registrationModel