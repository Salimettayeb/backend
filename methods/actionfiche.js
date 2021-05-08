var Fiche = require('../models/fiche')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewFiche: function (req, res) {
        if ((!req.body.name) || (!req.body.dateOfBirth) || (!req.body.phone) || (!req.body.email) || (!req.body.address) || (!req.body.state)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newFiche = Fiche({
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                state: req.body.state,
                
            });
            newFiche.save(function (err, newFiche) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
       
    }}
    module.exports = functions