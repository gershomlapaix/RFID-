const express = require('express')
const Transactions = require('../models/rfid_transactions.model')
const Registration = require('../models/rfid_register.model')
const balance = require('../middlewares/getBalance')
const cardExistence = require("../middlewares/cardExistence")

const router = express.Router();

router.get('/', async (req, res) => {
    Transactions.find({})
        .then((all_transactions) => {
            return res.json({
                ALL_TRANSACTIONS: all_transactions
            })
        })
        .catch(() => {
            return res.json({
                Message: `Data not found..`
            })
        })
})


router.post('/', async (req, res) => {
    var currentBalance = 0;

    const card = await Registration.findOne({
        UUID: req.body.UUID
    })

    Registration.find({})
    .then((getRegistrations) => {
        currentBalance = parseInt(getRegistrations[0].initial_balance)
        return currentBalance
        // console.log(currentBalance)
    })

    // if (card) {
    //     const newTransaction = new Transactions()
    //     newTransaction.UUID = req.body.UUID;
    //     newTransaction.transport_fare = parseInt(req.body.transport_fare)
    //     // newTransaction.new_balance = (currentBalance - parseInt(req.body.transport_fare));

    //     newTransaction.save()
    //         .then(() => {
    //             return res.json({
    //                 Message: `Transaction success...`
    //             }).status(201)
    //         })
    //         .catch(err => console.log(err))
    // } else {
    //     return res.json({
    //         Message: `The card with UUID ${req.body.UUID} exists. Try another one`
    //     })
    // }
    console.log(currentBalance)
})

module.exports = router