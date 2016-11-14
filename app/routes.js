var router = require("express").Router();
var request = require('request');
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'ZZd9nkRObqyUruNcyW_U-Q',
  consumer_secret: 'yXYdTu1alsTgKyzCCntLqV83sZY',
  token: 'MxzzUU3nyH6whuUH_ugISQW69jjsubCP',
  token_secret: 'MiI3lxjFjLCIGnYWr9w0bS3dpP4',
});

router.post("/food", function(req, res) {    
  yelp.search({ 
    term: 'restaurant', 
    location: req.body.address,
    limit: 10,
    sort: 2,
    radius_filter: 400
     })
  .then(function (data) {
    // console.log(data);
    // console.log(data.rating);
    res.send(data);
  })
  .catch(function (err) {
    // console.error(err);
  });
});

module.exports = router;
