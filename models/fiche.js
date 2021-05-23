var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var ficheSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref:"Doctor",
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    filenumber: {
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
    dateofbirth:  {
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
    valueChoose: {
        type: String,
        required: true
    },
    childChosed: {
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
    cityChosed: {
        type: String,
        required: true
    },
})



module.exports = mongoose.model('Fiche', ficheSchema)