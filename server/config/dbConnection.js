const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/rfid_transactions", {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("DB connected well")
    })
    .catch(err => console.log(err))

require('../models/rfid_register.model')
require('../models/rfid_transactions.model')