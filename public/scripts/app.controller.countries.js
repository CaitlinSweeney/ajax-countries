countries
  .controller('countriesController', countryCtrl)

countryCtrl.$inject = ['$location', 'apiFactory']

function countryCtrl ($location, apiFactory) {
  var cCtrl = this;
  cCtrl.list = false;

  apiFactory.getCountries().then(function(response) {
    cCtrl.countries = response.data;
  })

  cCtrl.showCountries = function() {
    cCtrl.list = !cCtrl.list;
  }

}
