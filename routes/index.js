var countryApi = require('./countryApi');

module.exports = (app) => {
  // Routes //
  app.get('/api/countries', countryApi.get);
  app.get('/api/country/:name', countryApi.get);
}
