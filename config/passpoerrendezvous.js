var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var Rendezvous = require('../models/rendezvous')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Rendezvous.find({
            id: jwt_payload.id
        }, function (err, rendezvous) {
                if (err) {
                    return done(err, false)
                }
                if (rendezvous) {
                    return done(null, rendezvous)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
    
}