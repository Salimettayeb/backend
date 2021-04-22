const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const passport = require('passport')
const doctor = require('doctor')
const secretaire = require('secretaire')
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

app.use(doctor.initialize())
require('./config/doctorauth')(passport)

app.use(secretaire.initialize())
require('./config/secretaireauth')(passport)




const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))