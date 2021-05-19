var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var appoinmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time:  {
        type: String, 
        required: true
    },
})



module.exports = mongoose.model('Appoinment', appoinmentSchema)