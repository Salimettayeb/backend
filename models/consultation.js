var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var consultationSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    filenumber: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    height:  {
        type: String, 
        required: true
    },
    reasonofconsultation: {
        type: String,
        required: true
    },
    diagnosticresult: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
})



module.exports = mongoose.model('Consultation', consultationSchema)