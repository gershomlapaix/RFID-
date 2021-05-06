const Registration = require('../models/rfid_register.model')

module.exports.addCardInfo = (req, res, next)=> {
    const card_uuid = req.body.UUID;
    Registration.findOne({UUID: card_uuid}).then(doc=> {
        if(doc) {
            req.card_info = doc;
            return next();
        }else{
            return res.status(404).send({
                message: "CARD NOT FOUND or SOMETHING WENT WRONG",
                success: false
            })
        }
    }).catch(err=> {
        return res.status(404).send({
            message: "CARD NOT FOUND or SOMETHING WENT WRONG",
            success: false
        })
    })
}