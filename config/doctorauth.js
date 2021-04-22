var JwtStrategy = require('doctorauth-jwt').Strategy
var ExtractJwt = require('doctorauth-jwt').ExtractJwt

var Doctor = require('../models/doctor')
var config = require('./dbconfig')

module.exports = function (doctorauth) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    doctorauth.use(new JwtStrategy(opts, function (jwt_payload, done) {
        doctor.find({
            id: jwt_payload.id
        }, function (err, doctor) {
                if (err) {
                    return done(err, false)
                }
                if (doctor) {
                    return done(null, doctor)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
}