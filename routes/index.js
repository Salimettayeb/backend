const express = require('express')
const actions = require('../methods/actions')
const actionsdoct = require('../methods/doctoraction')
const actionssec = require('../methods/secretaireaction')

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
router.post('/doctor/adddoctor', actionsdoct.addNewDoctor)

//@desc Authenticate a doctor
//@route POST /authenticate
router.post('/doctor/authenticate', actionsdoct.authenticateDoctor)

//@desc Get info on a doctor
//@route GET /getinfo
router.get('/doctor/getinfoDoctor', actionsdoct.getinfoDoctor)


//Secretaire

//@desc Adding new secretaire
//@route POST /adddoctor
router.post('/secretaire/addsecretaire', actionssec.addNewSecretaire)

//@desc Authenticate a secretaire
//@route POST /authenticate
router.post('/secretaire/authenticatesecretaire', actionssec.authenticateSecretaire)

//@desc Get info on a secretaire
//@route GET /getinfo
router.get('/secretaire/getinfosecretaire', actionssec.getinfoSecretaire)




module.exports = router
