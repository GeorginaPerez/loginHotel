const {status} = require('express/lib/response')
const mongoose = require('mongoose')

const costumerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is requiered'],
    },
    lastName:{
        type:String,
        required:[true, 'Last Name is requiered'],
    },
    address:{
        type:String,
        required:[true, 'The address is requiered'],

    },
    age:{
        type:Number,
        default:0 

    },
    city:{
        type:String,
        required:[true, 'The city is requiered'], 

    },
    country:{
        type:String,
       // required:[true, 'The country is requiered'],  
    },
    phoneNumber:{
        type:Number,
        default:0 
    },
    email:{
        type:String,
        required:[true, 'email is requiered'], 
    },

});

const modelCostumers = mongoose.model('Costumers',costumerSchema)
module.exports = modelCostumers
