const router = require('express').Router()
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(process.env.ENV_NAME)
}) 
router.use('/statistics', require('./statistics'))

module.exports = router
