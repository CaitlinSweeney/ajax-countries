var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    name: {type : String},
    frenchName: {type : String},
    localName: {type : String},
    region: {type : String}
});

// export the model
module.exports = mongoose.model('Country', countrySchema, 'countries'); 
