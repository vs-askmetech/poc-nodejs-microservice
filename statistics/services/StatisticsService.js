const { db } = require('../config/db')

/**
 * Statistics Service.
 */
class StatisticsService {
  async getStatisticsData(req) {
    try {      
      const url = `https://api.sportmonks.com/v3/football/fixtures?api_token=${process.env.SPORTMONKS_TOKEN}&include=statistics&filters=statisticTypes:42,49`;
      let res = await fetch(url, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new StatisticsService()
