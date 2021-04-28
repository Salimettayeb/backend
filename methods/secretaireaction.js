var secretaire = require('../models/secretaire')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewSecretaire: function (req, res) {
        if ((!req.body.name) || (!req.body.email) || (!req.body.password)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newSecretaire = secretaire({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            newSecretaire.save(function (err, newSecretaire) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },
    authenticateSecretaire: function (req, res) {
        Secretaire.findOne({
            email: req.body.email,
        }, function (err, secretaire) {
                if (err) throw err
                if (!secretaire) {
                    res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
                }

                else {
                    secretaire.comparePassword(req.body.password, function (err, isMatch) {
                        if (isMatch && !err) {
                            var token = jwt.encode(secretaire, config.secret)
                            res.json({success: true, token: token})
                        }
                        else {
                            return res.status(403).send({success: false, msg: 'Authentication failed, wrong password'})
                        }
                    })
                }
        }
        )
    },
    getinfoSecretaire: function (req, res) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1]
            var decodedtoken = jwt.decode(token, config.secret)
            return res.json({success: true, msg: 'Hello ' + decodedtoken.name})
        }
        else {
            return res.json({success: false, msg: 'No Headers'})
        }
    }
}

module.exports = functions