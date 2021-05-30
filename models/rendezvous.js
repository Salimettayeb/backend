var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var rendezvousSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },

})



module.exports = mongoose.model('Rendezvous', rendezvousSchema)