var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var rendezvousSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref:"Doctor",
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
    status: {
        type: Number,
        enum:[1,2,3],
        default: 1,
        required: true
    }

})



module.exports = mongoose.model('Rendezvous', rendezvousSchema)