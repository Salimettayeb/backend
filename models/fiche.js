var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var ficheSchema = new Schema({
    filenumbre: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dateOfBirth:  {
        type: String, 
        required: true
    },
    age: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    materialStatus: {
        type: String,
        required: true
    },
    nbrchildren: {
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
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
})



module.exports = mongoose.model('Fiche', ficheSchema)