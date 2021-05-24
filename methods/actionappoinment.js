var Appoinment = require('../models/appoinment')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewAppoinment: function (req, res) {
        console.log(req.body)
        console.log("ddddddddddddd")

        if ((!req.body.doctorId) || (!req.body.gender) ||  (!req.body.filenumber) || (!req.body.firstname) || (!req.body.lastname) || (!req.body.dateofbirth) ||(!req.body.age) || (!req.body.profession) || (!req.body.valueChoose) || (!req.body.childChosed) || (!req.body.phonenumber) || (!req.body.email) || (!req.body.address) || (!req.body.cityChosed)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newAppoinment = Appoinment({
                doctorId: req.body.doctorId,
                gender: req.body.gender,
                filenumber: req.body.filenumber,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                dateofbirth: req.body.dateofbirth,
                age: req.body.age,
                profession: req.body.profession,
                valueChoose: req.body.valueChoose,
                childChosed: req.body.childChosed,
                phonenumber: req.body.phonenumber,
                email: req.body.email,
                address: req.body.address,
                cityChosed: req.body.cityChosed,
                
            });
            newAppoinment.save(function (err, newAppoinment) {
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

    getinfoAppoinment: async function (req, res) {
        console.log(req.payload);
      let appoinments = await Appoinment.find({doctorId: req.payload._id});
      return res.json({success: true, appoinments: appoinments});
    }

}
    module.exports = functions