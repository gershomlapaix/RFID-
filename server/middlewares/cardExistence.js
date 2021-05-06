const Registration = require('../models/rfid_register.model')
const cardExist = async () =>{
    const card = await Registration.findOne({UUID:req.body.UUID})
    if(card){
        return true;
    }
    else{
        return false
    }
}