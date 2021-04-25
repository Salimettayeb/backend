const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const passport = require('passport')
const doctor = require('./models/doctor')
const secretaire = require('./models/secretaire')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const doctorauth = require('./config/passport-doctor')
const secretaireauth = require('./config/passport-secretaire')
const user = require('./models/user')



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
require('./config/passport-doctor')(passport)
require('./config/passport-secretaire')(passport)

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))