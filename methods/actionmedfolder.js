var MedFolder = require('../models/medfolder')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewMedFolder: function (req, res) {
        console.log(req.body)
        if ((!req.body.doctorId) || (!req.body.name) || (!req.body.filenumber) || (!req.body.personnalantecedents) || (!req.body.familyantecedent) || (!req.body.riskfactors) || (!req.body.notes)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newMedFolder = MedFolder({
                doctorId: req.body.doctorId,
                name: req.body.name,
                filenumber: req.body.filenumber,
                personnalantecedents: req.body.personnalantecedents,
                familyantecedent: req.body.familyantecedent,
                riskfactors: req.body.riskfactors,
                notes: req.body.notes,
            });
            newMedFolder.save(function (err, newMedFolder) {
                if (err) {
                    console.log(err);
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
       
    },

    getinfoMedfolder: async function (req, res) {
        console.log(req.payload);
      let medfolders = await MedFolder.find({doctorId: req.payload._id});
      return res.json({success: true, medfolders: medfolders});
    }
}
    module.exports = functions