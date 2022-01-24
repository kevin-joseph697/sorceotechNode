const mongoose = require('mongoose')
const validator  = require('validator')

const contactSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
        
    },
    lastname:{
       type:String,
       trim:true
      
    },
    email:{
        type:String
    },
    message:{
        type:String
    },
    adeatils:{
        type:String
    }
})

const records = mongoose.model('records',contactSchema)

module.exports = records