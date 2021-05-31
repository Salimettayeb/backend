var Dailyrecip = require('../models/dailyrecip')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewDailyrecip: function (req, res) {
        console.log(req.body)
        console.log("ddddddddddddd")
        if ((!req.body.doctorId) || (!req.body.title) || (!req.body.amount)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
        var newDailyrecip = Dailyrecip({
                doctorId: req.body.doctorId,
                title: req.body.title,
                amount: req.body.amount,   
            });
            newDailyrecip.save(function (err, newDailyrecip) {
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

    getinfoDailyrecip: async function (req, res) {
        console.log(req.payload);
      let dailyrecips = await Dailyrecip.find({doctorId: req.payload._id});
      return res.json({success: true, dailyrecips: dailyrecips});
    }

}
    module.exports = functions