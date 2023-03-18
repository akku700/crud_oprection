const mongoose = require('mongoose')
const validator = require('validator')

const studentsdata = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:3
    },
    
    email:{
            type:String,
            required:true,
            unique:[true,'Email id already parsent'],
            validate(value){
                if(validator.isEmail(value)){
                    throw new Error('invalid error')
                }
            }
        },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
    
})

const Students = new mongoose.model('Student',studentsdata)

module.exports = Students;