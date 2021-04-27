var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var doctor = require('../models/doctor')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Doctor.find({
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