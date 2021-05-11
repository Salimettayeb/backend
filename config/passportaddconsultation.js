var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var Consultation = require('../models/consultation')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Consultation.find({
            id: jwt_payload.id
        }, function (err, consultation) {
                if (err) {
                    return done(err, false)
                }
                if (consultation) {
                    return done(null, consultation)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
    
}