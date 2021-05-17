const express = require('express')
const actions = require('../methods/actions')
const doctoraction = require('../methods/doctoraction')
const secretaireaction = require('../methods/secretaireaction')
const actionfiche = require('../methods/actionfiche')
const actionconsultation =require('../methods/actionconsultation')
const actionappoinment =require('../methods/actionappoinment')
const actionmedfolder =require('../methods/actionmedfolder')


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
router.get('/fichepatient', (req, res) => {
    res.send('fichepatient')
})
router.get('/medicalfolders', (req, res) => {
    res.send('medicalfolders')
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
router.post('/doctor/adddoctor', doctoraction.addNewDoctor)

//@desc Authenticate a doctor
//@route POST /authenticate
router.post('/doctor/authenticatedoctor', doctoraction.authenticateDoctor)

//@desc Get info on a doctor
//@route GET /getinfo
router.get('/doctor/getinfodoctor', doctoraction.getinfoDoctor)


//Secretaire

//@desc Adding new secretaire
//@route POST /adddoctor
router.post('/secretaire/addsecretaire', secretaireaction.addNewSecretaire)

//@desc Authenticate a secretaire
//@route POST /authenticate
router.post('/secretaire/authenticatesecretaire', secretaireaction.authenticateSecretaire)

//@desc Get info on a secretaire
//@route GET /getinfo
router.get('/secretaire/getinfosecretaire', secretaireaction.getinfoSecretaire)


//Add new fiche patient 
router.post('/fichepatient/addnewfiche', actionfiche.addNewFiche)

//Add new consultation 
router.post('/consultations/addnewconsultation', actionconsultation.addNewConsultation)

//add new appoinment 
router.post('/appoinments/addnewappoinment', actionappoinment.addNewAppoinment)


//add new appoinment 
router.post('/medicalfolders/addnewmedfolder', actionmedfolder.addNewMedfolder)



module.exports = router
