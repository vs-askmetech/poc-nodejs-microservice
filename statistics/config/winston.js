const winston = require('winston')

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: `./logs/app.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  },
  fileError: {
    level: 'error',
    filename: `./logs/app-error.log`,
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5,
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  },
}

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [new winston.transports.File(options.file), new winston.transports.File(options.fileError)],
  exitOnError: false, // do not exit on handled exceptions
})

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both
    // transports (file and console)
    logger.info(message)
  },
}

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console(options.console))
}

module.exports = logger
