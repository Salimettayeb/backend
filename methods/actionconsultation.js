var Consultation = require('../models/consultation')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewConsultation: function (req, res) {
        console.log(req.body)

        if ((!req.body.name) || 
            (!req.body.filenumber) || (!req.body.weight) || (!req.body.height) ||
            (!req.body.reasonofconsultation) || (!req.body.diagnosticresult) ||
             (!req.body.notes) 
         ) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newConsultation = Consultation({
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
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
       
    }}
    module.exports = functions