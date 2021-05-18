const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const passport = require('passport')
const doctor = require('./models/doctor')
const secretaire = require('./models/secretaire')
const user = require('./models/user')
const fiche = require('./models/fiche')
const consultation = require('./models/consultation')
const appoinment = require('./models/appoinment')
const medfolder = require('./models/medfolder')

const bodyParser = require('body-parser')

const routes = require('./routes/index')

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.use(passport.initialize())
require('./config/passport')(passport)
require('./config/passportdoctor')(passport)
require('./config/passportsecretaire')(passport)
require('./config/passportaddpatient')(passport)
require('./config/passportaddconsultation')(passport)
require('./config/passportmedicalfolder')(passport)





const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

