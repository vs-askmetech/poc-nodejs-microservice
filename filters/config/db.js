const dotenv = require('dotenv')
dotenv.config()

const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_WRITER,
    //ssl: process.env.DB_SSL && {
    //  rejectUnauthorized: true,
    //},
    charset: 'utf8_bin'
  },
})

module.exports = { db }
