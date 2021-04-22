var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')
var secretaireSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
secretaireSchema.pre('save', function (next) {
    var secretaire = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(secretaire.password, salt, function (err, hash) {
                if (err) {
                    return next(err)
                }
                secretaire.password = hash;
                next()
            })
        })
    }

    else {
        return next()
    }
    })
    secretaireSchema.methods.comparePassword = function (passw, cb) {
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if(err) {
                return cb(err)
            }
            cb(null, isMatch)
        })
    }
module.exports = mongoose.model('Secretaire', secretaireSchema)