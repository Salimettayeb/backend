const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})
router.get('/doctor', (req, res) => {
    res.send('doctor')
})
router.get('/secretaire', (req, res) => {
    res.send('Secretaire')
})

//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc Get info on a user
//@route GET /getinfo
router.get('/getinfo', actions.getinfo)


//Doctor

//@desc Adding new doctor
//@route POST /adddoctor
router.post('/doctor/adddoctor', actions.addNewDoctor)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/doctor/authenticateDoctor', actions.authenticateDoctor)

//@desc Get info on a user
//@route GET /getinfo
router.get('/doctor/getinfoDoctor', actions.getinfoDoctor)


//Secretaire

//@desc Adding new doctor
//@route POST /adddoctor
router.post('/secretaire/addsecretaire', actions.addNewSecretaire)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/secretaire/authenticatesecretaire', actions.authenticateSecretaire)

//@desc Get info on a user
//@route GET /getinfo
router.get('/secretaire/getinfosecretaire', actions.getinfoSecretaire)




module.exports = router