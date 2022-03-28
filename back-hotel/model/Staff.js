const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'The name is requiered'],
    },
    lastName:{
        type:String,
        required:[true, 'The last name is requiered'],
    },
    rol:{
        type:String,
        required:[true, 'The last role is requiered'],
    },
    email:{
        type:String,
        required:[true, 'The last user is requiered'],

    },
    passw:{
        type:String,
        required:[true, 'The password user is requiered'],
    }  

});

const modelStaff = mongoose.model('Staff',staffSchema)
module.exports = modelStaff
