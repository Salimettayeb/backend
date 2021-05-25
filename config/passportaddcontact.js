var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var Contact = require('../models/contact')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Contact.find({
            id: jwt_payload.id
        }, function (err, contact) {
                if (err) {
                    return done(err, false)
                }
                if (contact) {
                    return done(null, contact)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
    
}