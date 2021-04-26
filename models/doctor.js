var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:  {
       type: String, 
       required: true
    
    },
    password: { 
        type: String,
        required: true
    }
})
doctorSchema.pre('save', function (next) {
    var doctor = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(doctor.password, salt, function (err, hash) {
                if (err) {
                    return next(err)
                }
                doctor.password = hash;
                next()
            })
        })
    }
    else {
        return next()
    }
})
    doctorSchema.methods.comparePassword = function (passw, cb) {
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if(err) {
                return cb(err)
            }
            cb(null, isMatch)
        })
    }
    module.exports = mongoose.model('Doctor', doctorSchema)
