var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

var Medfolder = require('../models/medfolder')
var config = require('./dbconfig')

module.exports = function (passport) {
    var opts = {}

    opts.secretOrKey = config.secret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        Medfolder.find({
            id: jwt_payload.id
        }, function (err, medfolder) {
                if (err) {
                    return done(err, false)
                }
                if (medfolder) {
                    return done(null, medfolder)
                }

                else {
                    return done(null, false)
                }
        }
        )
    }))
    
}