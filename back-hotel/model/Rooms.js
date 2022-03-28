const { status } = require('express/lib/response')
const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    typeRoom:{
        type:String,
        required:[true, 'The type of room is requiered'],
    },
    price:{
        type:Number,
        default:0

    },
    numberFloor:{
        type:Number,
        default:0

    },
    photos:{
        type:[],
        //required:[true, 'This field is requiered'],

    },
    status:{
        type:Boolean,    

    }

});

const modelRoom = mongoose.model('Room', roomSchema);
module.exports = modelRoom