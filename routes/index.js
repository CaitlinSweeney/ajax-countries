var countryCtrl = require('./countries');

module.exports = (app) => {
  // Routes //

  // Country Routes //
  app.get('/api/countries', countryCtrl.get)
  
}
