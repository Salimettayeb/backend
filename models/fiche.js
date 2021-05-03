var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var ficheSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email:  {
        type: String, 
        required: true
    },
    address: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
})



module.exports = mongoose.model('Fiche', ficheSchema)