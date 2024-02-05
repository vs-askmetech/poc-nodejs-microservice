const createError = require('http-errors')
const express = require('express')
const morgan = require('morgan')
const winston = require('./config/winston')
const cors = require('cors')  
const indexRouter = require('./routes/index')

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(morgan('combined', { stream: winston.stream }))
app.use(express.urlencoded({ extended: false }))
app.use('/', indexRouter)
// TODO: check if this is the best place to initialize this global variable.
global.market = ''

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // include winston logging
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

  // render the error page
  res.status(err.status || 500)
  res.send('Something went wrong!')
})

module.exports = app
