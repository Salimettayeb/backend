var Rendezvous = require('../models/rendezvous')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewRendezvous: function (req, res) {
        console.log(req.body)
        if ((!req.body.doctorId) || (!req.body.userId) || (!req.body.date) || (!req.body.time) || (!req.body.contact)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newRendezvous = Rendezvous({
                doctorId: req.body.doctorId,
                userId: req.body.userId,
                date: req.body.date,
                time: req.body.time,
                contact: req.body.contact,

            });
            newRendezvous.save(function (err, newRendezvous) {
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

    getinfoRendezvous: async function (req, res) {
        console.log(req.payload);
      let rendezvouss = await Rendezvous.find({userId: req.payload._id});
      return res.json({success: true, rendezvouss: rendezvouss});
    },
    getinfoRendezvousdoctor: async function (req, res) {
        console.log(req.payload);
      let rendezvouss = await Rendezvous.find({doctorId: req.payload._id}).populate('userId');
      return res.json({success: true, rendezvouss: rendezvouss});
    }

}
    module.exports = functions