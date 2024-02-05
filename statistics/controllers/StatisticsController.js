const StatisticsService = require('../services/StatisticsService')

/**
 * Statistics Controller.
 */
class StatisticsController {
  /**
   * Get Feature Homes. 
   * 
   * @param {*} req 
   * @returns 
   */
  async getStatisticsData(req) {
    try {
      return await StatisticsService.getStatisticsData(req);
    } catch (error) {
      return error;
    }
  } 
}

module.exports = new StatisticsController()
