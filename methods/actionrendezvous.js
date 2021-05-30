var Rendezvous = require('../models/rendezvous')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewRendezvous: function (req, res) {
        console.log(req.body)
        if ((!req.body.userId) || (!req.body.date) || (!req.body.time)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newRendezvous = Rendezvous({
                userId: req.body.userId,
                date: req.body.date,
                time: req.body.time,
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
    }
}
    module.exports = functions