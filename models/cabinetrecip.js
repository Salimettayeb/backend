var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var CabinetrecipSchema = new Schema({
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



module.exports = mongoose.model('Cabinetrecip', CabinetrecipSchema)