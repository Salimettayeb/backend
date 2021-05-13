var Fiche = require('../models/fiche')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewFiche: function (req, res) {
        console.log(req.body)
        if ((!req.body.filenumber) || 
            (!req.body.firstname) || (!req.body.lastname) || (!req.body.dateofbirth) ||
            (!req.body.age) || (!req.body.profession) || (!req.body.valueChoose) ||
             (!req.body.childChosed) || (!req.body.phonenumber) (!req.body.email) ||
         (!req.body.address) || (!req.body.cityChosed)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newFiche = Fiche({
                filenumber: req.body.filenumber,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                dateOfBirth: req.body.dateOfBirth,
                age: req.body.age,
                profession: req.body.profession,
                valueChoose: req.body.valueChoose,
                childChosed: req.body.childChosed,
                phonenumber: req.body.phonenumber,
                email: req.body.email,
                address: req.body.address,
                cityChosed: req.body.cityChosed,
                
            });
            newFiche.save(function (err, newFiche) {
                if (err) {
                    console.log(err);
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
       
    }}
    module.exports = functions