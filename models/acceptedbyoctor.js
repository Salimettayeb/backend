var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var AcceptedbydoctorSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref:"Doctor",
        required: true
    },
    
 
})



module.exports = mongoose.model('Acceptedbydoctor', AcceptedbydoctorSchema)