var Contact = require('../models/contact')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNewContact: function (req, res) {
        console.log(req.body)
        console.log("ddddddddddddd")
        if ((!req.body.doctorId) || (!req.body.name) || (!req.body.job) || (!req.body.phonenumber) || (!req.body.email) || (!req.body.address)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
        var newContact = Contact({
                doctorId: req.body.doctorId,
                name: req.body.name,
                job: req.body.job,
                phonenumber: req.body.phonenumber,
                email: req.body.email,
                address: req.body.address,   
            });
            newContact.save(function (err, newContact) {
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

    getinfoContact: async function (req, res) {
        console.log(req.payload);
      let contacts = await Contact.find({doctorId: req.payload._id});
      return res.json({success: true, contacts: contacts});
    }

}
    module.exports = functions