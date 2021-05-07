const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

require('./config/dbConnection')
const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())


const rfidRegister = require('./controllers/rfid_register.controller')
const rfidTransactions = require('./controllers/rfid_transactions.controller')
app.use('/api/rfid', rfidRegister)
app.use('/api/transactions', rfidTransactions)
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/*
  {
    "UUID":"A0 43 B9 00",
    "customer":"Asaba",
    "initial_balance":"100000"
}
*/