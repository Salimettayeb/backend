var Fiche = require('../models/fiche')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewFiche: function (req, res) {
        console.log(req.body)
        if ((!req.body.doctorId) || (!req.body.groupValue) || (!req.body.filenumber) || (!req.body.firstname) || (!req.body.lastname) || (!req.body.dateofbirth) ||(!req.body.age) || (!req.body.profession) || (!req.body.valueChoose) || (!req.body.childChosed) || (!req.body.phonenumber) || (!req.body.email) || (!req.body.address) || (!req.body.cityChosed)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newFiche = Fiche({
                doctorId: req.body.doctorId,
                groupValue: req.body.groupValue,
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
            newFiche.save(function (err, newFiche) {
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

    getinfoFiche: async function (req, res) {
        console.log(req.payload);
      let fiches = await Fiche.find({doctorId: req.payload._id});
      return res.json({success: true, fiches: fiches});
    }

}
    module.exports = functions