var Country = require('../models/country');

module.exports = {
  
  get : (req, res) => {
    Country.find({}, function(err, countries){
      res.json(countries);
    });
  }

}
