const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , authController = require('./controllers/authController')
require('dotenv').config()

const app = express()

// app.use(express.static(`${__dirname}/../build`))
app.use(bodyParser.json())

app.use(session({
  resave: false, 
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET
}))

massive(process.env.CONNECTION_STRING).then( db => {
  app.set('db', db)
    console.log('DATABASE CONNECTED')
})

//Auth0
app.get('/auth/callback', authController.auth)

app.get('/api/posts/:userid')
app.get('/api/post/:postid')

app.put('/api/auth/register')
app.put('/api/auth/login')
app.put('/api/post/:userid')



const PORT= process.env.SERVER_PORT || 4001
app.listen(PORT, () => {
  console.log('WELCOME TO THE SPACE JAMMM', PORT)
})

