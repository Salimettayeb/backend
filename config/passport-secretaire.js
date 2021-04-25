var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var Secretaire = require('../models/secretaire')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Secretaire.find({
            id: jwt_payload.id
        }, function (err, secretaire) {
                if (err) {
                    return done(err, false)
                }
                if (secretaire) {
                    return done(null, secretaire)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
}