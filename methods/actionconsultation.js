var Consultation = require('../models/consultation')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewConsultation: function (req, res) {
        console.log(req.body)

        if ((!req.body.name) || (!req.body.filenumber) ) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newConsultation = Consultation({
                date: req.body.date,
                time: req.body.time,
                name: req.body.name,
                filenumber: req.body.filenumber,
                weight: req.body.weight,
                height: req.body.height,
                reasonofconsultation: req.body.reasonofconsultation,
                diagnosticresult: req.body.diagnosticresult,
                notes: req.body.notes,
              
            });
            newConsultation.save(function (err, newConsultation) {
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