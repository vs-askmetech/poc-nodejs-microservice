const router = require('express').Router()
const StatisticsController = require('../controllers/StatisticsController')
const logger = require('../config/winston')

/**
 * Router file for Statistics.
 */
router.get('/', async (req, res) => {
  try {
    const data = await StatisticsController.getStatisticsData()
    res.json(data)
  } catch (error) {
    logger.error(error.stack)
    res.sendStatus(500)
  }
})

module.exports = router
