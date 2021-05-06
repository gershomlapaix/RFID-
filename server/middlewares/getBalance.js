const Registration = require('../models/rfid_register.model')

const getBalance = () => {
    var currentBalance = 0;
    Registration.find({})
    .then((getRegistrations) => {
        currentBalance = parseInt(getRegistrations[0].initial_balance)
        return currentBalance
        // console.log(currentBalance)
    })
    // return currentBalance
}

// module.exports = getBalance
console.log(getBalance)