var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var Fiche = require('../models/fiche')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Fiche.find({
            id: jwt_payload.id
        }, function (err, fiche) {
                if (err) {
                    return done(err, false)
                }
                if (fiche) {
                    return done(null, fiche)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
    
}