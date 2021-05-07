const express = require('express')
const Transactions = require('../models/rfid_transactions.model')
const Registration = require('../models/rfid_register.model')
const balance = require('../middlewares/getBalance')
const cardExistence = require("../middlewares/cardExistence")
const {
    addCardInfo
} = require("../middlewares/getBalance")

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


router.post('/', addCardInfo, async (req, res) => {
    const card = req.card_info;

    if (card) {
        const newTransaction = new Transactions({
            UUID: card.UUID,
            transport_fare: req.body.transport_fare,
            new_balance: (card.initial_balance - req.body.transport_fare)
        })
        newTransaction.save()
            .then(async () => {
                await Registration.findOneAndUpdate({
                    UUID: card.UUID
                }, {
                    initial_balance: newTransaction.new_balance
                }, {
                    useFindAndModify: false
                })
                return res.json({
                    Message: `Transaction success...`
                }).status(201)
            })
            .catch(err => console.log(err))
    } else {
        return res.json({
            Message: `The card with UUID ${card.UUID} exists. Try another one`
        })
    }
})

router.delete('/:id', async (req, res) => {
    Transactions.findByIdAndRemove(req.params.id)
        .then(() => {
            return res.send('Successfully deleted')
        }).catch(err => {
            return res.send(err)
        })
})

module.exports = router