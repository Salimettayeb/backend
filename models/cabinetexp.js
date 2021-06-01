var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var CabinetexpSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref:"Doctor",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
})



module.exports = mongoose.model('Cabinetexp', CabinetexpSchema)