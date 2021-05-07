const express = require('express')
const Registration = require('../models/rfid_register.model')
const cardExistence = require("../middlewares/cardExistence")
const router = express.Router();
router.get('/', async (req, res) => {
    Registration.find({})
        .then(allregistrations => {
            return res.json({
                ALL_REGISTRATIONS: allregistrations
            }).status(201)
        }).catch(err => {
            console.log(err)
        })
})

router.post('/', async (req, res) => {
    const card = await Registration.findOne({UUID : req.body.UUID})
    if (!card) {
        const newCardRegister = await new Registration();
        newCardRegister.UUID = req.body.UUID;
        newCardRegister.customer = req.body.customer
        newCardRegister.initial_balance = req.body.initial_balance;
        newCardRegister.save()
            .then(() => {
                return res.json({
                    Message: `New user Registered successfully`
                }).status(201)
            }).catch(err => console.log(err))
    } else {
        return res.json({
            Message: `The card with UUID ${req.body.UUID} exists. Try another one`
        })
    }
})

router.delete('/:id',async(req,res) =>{
    Registration.findByIdAndRemove(req.params.id)
    .then(()=>{
        return res.send('Successfully deleted')
    }).catch(err =>{return res.send(err)})
})
module.exports = router