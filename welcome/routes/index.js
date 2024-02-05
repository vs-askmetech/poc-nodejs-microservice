const router = require('express').Router() 

/* GET home page. */ 
router.get('/', (req, res, next) => {
  console.log('Welcome!')
  res.json({
    'message': 'Welcome!'
  });
});

module.exports = router
