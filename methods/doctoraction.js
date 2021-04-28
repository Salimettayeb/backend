var Doctor = require('../models/doctor')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewDoctor: function (req, res) {
        if ((!req.body.name) || (!req.body.password)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newDoctor = Doctor({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            newDoctor.save(function (err, newDoctor) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },
    authenticateDoctor: function (req, res) {
        Doctor.findOne({
         email: req.body.email,

        }, function (err, doctor) {
                if (err) throw err
                if (!doctor) {
                    res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
                }

                else {
                    doctor.comparePassword(req.body.password, function (err, isMatch) {
                        if (isMatch && !err) {
                            var token = jwt.encode(doctor, config.secret)
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
    getinfoDoctor: function (req, res) {
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