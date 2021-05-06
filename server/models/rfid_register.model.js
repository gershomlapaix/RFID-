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
        type: String,
        required: true,
        maxlength: 7
    }
}, {
    timestamps: true
})

const registrationModel = mongoose.model("rfid_registration", registrationSchema)
module.exports = registrationModel