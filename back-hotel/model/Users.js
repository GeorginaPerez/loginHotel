const {status} = require('express/lib/response')
const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    rol:{
        type:String,
        required:[true, 'Rol is requiered'],
    },
    user:{
        type:String,
        required:[true, 'User is requiered'],
    },
    passw:{
        type:String,
        required:[true, 'Password is requiered'],


    }

});

const modelUser = mongoose.model('User', userSchema)
module.exports = modelUser