var Appoinment = require('../models/appoinment')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')
const appoinment = require('../models/appoinment')

var functions = {
    addNewAppoinment: function (req, res) {
        console.log(req.body)
        if ((!req.body.doctorId) || (!req.body.name) || (!req.body.phonenumber) || (!req.body.email) || (!req.body.date) || (!req.body.time)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newAppoinment = Appoinment({
                doctorId: req.body.doctorId,
                name: req.body.name,
                phonenumber: req.body.phonenumber,
                email: req.body.email,
                date: req.body.date,
                time: req.body.time,
                
            });
            newAppoinment.save(function (err, newAppoinment) {
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

    getinfoAppoinment: async function (req, res) {
        console.log(req.payload);
      let appoinments = await Appoinment.find({doctorId: req.payload._id});
      return res.json({success: true, appoinments: appoinments});
    }

}
    module.exports = functions