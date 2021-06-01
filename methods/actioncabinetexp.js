var Cabinetexp = require('../models/cabinetexp')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewCabinetrecip: function (req, res) {
        console.log(req.body)
        console.log("ddddddddddddd")
        if ((!req.body.doctorId) || (!req.body.title) || (!req.body.amount)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
        var newCabinetrecip = Cabinetexp({
                doctorId: req.body.doctorId,
                title: req.body.title,
                amount: req.body.amount,   
            });
            newCabinetexp.save(function (err, newCabinetexp) {
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

    getinfoCabinetexp: async function (req, res) {
        console.log(req.payload);
      let cabinetexps = await Cabinetexp.find({doctorId: req.payload._id});
      return res.json({success: true, cabinetexps: cabinetexps});
    }

}
    module.exports = functions