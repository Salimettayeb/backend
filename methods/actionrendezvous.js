var Rendezvous = require('../models/rendezvous')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewRendezvous: function (req, res) {
        console.log(req.body)
        if ((!req.body.doctorId) || (!req.body.userId) || (!req.body.patientname) || (!req.body.contact) || (!req.body.phonenumber) || (!req.body.date) || (!req.body.time)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newRendezvous = Rendezvous({
                doctorId: req.body.doctorId,
                userId: req.body.userId,
                patientname: req.body.patientname,
                contact: req.body.contact,
                phonenumber: req.body.phonenumber,
                date: req.body.time,
                time: req.body.contact,

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
      return res.json({success: true, rendezvous: rendezvouss});
    },
    



    updateRdvStatus: async function (req, res) {
        console.log(req.body);
      let rdv = await Rendezvous.findOne({_id: req.body._id});
      rdv.status = req.body.status;
      console.log(rdv);
      await rdv.save();
      console.log(rdv);

      return res.json({success: true, msg: "Status updated"});
    },
    getRdvByStatus: async function (req, res) {
      let rdvstatus = await Rendezvous.find({doctorId: req.payload._id,status: req.body.status}).populate('userId');
      return res.json({success: true, rdvstatus: rdvstatus});
    },



}
    module.exports = functions