const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const socketIo = require('socket.io')

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
const {getAllTransactions} = require('./controllers/rfid_transactions.controller')
app.use('/api/rfid', rfidRegister)
app.use('/api/transactions', rfidTransactions)
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
})

let interval
io.on('connection', (socket) => {
  console.log('New client connected')
  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(() => emit(socket), 1000)
  socket.on('disconnect', () => {
    console.log('Client disconnected')
    clearInterval(interval)
  })
})
const emit = async (socket) => {
  let response = await getAllTransactions()
  socket.emit('Transactions', response.transactions || [])
}

/*
  {
    "UUID":"A0 43 B9 00",
    "customer":"Asaba",
    "initial_balance":"100000"
}
*/