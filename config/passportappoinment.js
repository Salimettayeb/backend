var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var Appoinment = require('../models/appoinment')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Appoinment.find({
            id: jwt_payload.id
        }, function (err, appoinment) {
                if (err) {
                    return done(err, false)
                }
                if (appoinment) {
                    return done(null, appoinment)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
    
}