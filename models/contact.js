var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var contactSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref:"Doctor",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    job: {
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
    address:  {
        type: String, 
        required: true
    },
})



module.exports = mongoose.model('Contact', contactSchema)