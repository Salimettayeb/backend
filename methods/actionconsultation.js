var Consultation = require('../models/consultation')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewConsultation: function (req, res) {
        console.log(req.body)
        console.log("ddddddddddddd")
        if ((!req.body.doctorId) || (!req.body.date) || (!req.body.time) || (!req.body.name) || (!req.body.filenumber) || (!req.body.weight) || (!req.body.height) || (!req.body.reasonofconsultation) || (!req.body.diagnosticresult) || (!req.body.notes)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newConsultation = Consultation({
                doctorId: req.body.doctorId,
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
                console.log("ddddddddddddd")
                if (err) {
                    console.log(err);
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    console.log("ssqvedd");
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
       
    },

    getinfoConsultation: async function (req, res) {
        console.log(req.payload);
      let consultations = await Consultation.find({doctorId: req.payload._id});
      return res.json({success: true, consultations: consultations});
    }

}
    module.exports = functions